import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
    credentials: true,
  },
})
export class RealtimeGateway {
  @WebSocketServer()
  server!: Server;

  handleConnection(client: Socket) {
    const userId = client.handshake.auth?.userId ?? client.handshake.query?.userId;

    if (typeof userId === 'string' && userId.length > 0) {
      client.join(`user:${userId}`);
      client.data.userId = userId;
    }
  }

  handleDisconnect(client: Socket) {
    const userId = client.data.userId as string | undefined;

    if (userId) {
      client.leave(`user:${userId}`);
    }
  }

  @SubscribeMessage('ping')
  handlePing(@MessageBody() payload: unknown, @ConnectedSocket() _client: Socket) {
    return { event: 'pong', data: payload };
  }

  emitNotification(userId: string, notification: unknown) {
    this.server.to(`user:${userId}`).emit('notification', notification);
  }

  emitKudoCreated(userId: string, payload: unknown) {
    this.server.to(`user:${userId}`).emit('kudo.created', payload);
  }

  emitNotificationRead(userId: string, payload: unknown) {
    this.server.to(`user:${userId}`).emit('notification.read', payload);
  }
}
