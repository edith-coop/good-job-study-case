import { Server, Socket } from 'socket.io';
export declare class RealtimeGateway {
    server: Server;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handlePing(payload: unknown, _client: Socket): {
        event: string;
        data: unknown;
    };
    emitNotification(userId: string, notification: unknown): void;
    emitKudoCreated(userId: string, payload: unknown): void;
    emitNotificationRead(userId: string, payload: unknown): void;
}
