import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
    credentials: true,
  },
})
export class RealtimeGateway {
  private readonly logger = new Logger(RealtimeGateway.name);

  @WebSocketServer()
  server!: Server;

  handleConnection(client: Socket) {
    const userId = client.handshake.auth?.userId ?? client.handshake.query?.userId;
    this.logger.log(`WebSocket connected: socketId=${client.id}, userId=${String(userId ?? 'unknown')}`);

    if (typeof userId === 'string' && userId.length > 0) {
      client.join(`user:${userId}`);
      client.data.userId = userId;
      this.logger.log(`Socket joined room: user:${userId}`);
    } else {
      this.logger.warn(`WebSocket connected without userId: socketId=${client.id}`);
    }
  }

  handleDisconnect(client: Socket) {
    const userId = client.data.userId as string | undefined;
    this.logger.log(`WebSocket disconnected: socketId=${client.id}, userId=${userId ?? 'unknown'}`);

    if (userId) {
      client.leave(`user:${userId}`);
    }
  }

  @SubscribeMessage('ping')
  handlePing(@MessageBody() payload: unknown, @ConnectedSocket() _client: Socket) {
    return { event: 'pong', data: payload };
  }

  emitNotification(userId: string, notification: unknown) {
    this.logger.log(`Emitting notification to user:${userId}`);
    this.server.to(`user:${userId}`).emit('notification', notification);
  }

  emitKudoCreated(userId: string, payload: unknown) {
    this.logger.log(`Emitting kudo.created to user:${userId}`);
    this.server.to(`user:${userId}`).emit('kudo.created', payload);
  }

  emitNotificationRead(userId: string, payload: unknown) {
    this.logger.log(`Emitting notification.read to user:${userId}`);
    this.server.to(`user:${userId}`).emit('notification.read', payload);
  }
}
