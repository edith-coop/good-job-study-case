import { PrismaService } from '../prisma/prisma.service';
import { ListNotificationsQuery } from './dtos/list-notifications.query';
import { RealtimeGateway } from '../realtime/realtime.gateway';
export declare class NotificationsService {
    private readonly prisma;
    private readonly realtimeGateway;
    constructor(prisma: PrismaService, realtimeGateway: RealtimeGateway);
    createNotification(input: {
        receiverId: string;
        actorId?: string | null;
        type: string;
        entityType: string;
        entityId: string;
    }): Promise<{
        actor: {
            id: string;
            email: string;
            fullName: string;
            avatarUrl: string | null;
            department: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        type: import("../generated/prisma/enums").NotificationType;
        receiverId: string;
        actorId: string | null;
        entityType: string;
        entityId: string;
        isRead: boolean;
    }>;
    list(userId: string, query: ListNotificationsQuery): Promise<{
        items: ({
            actor: {
                id: string;
                email: string;
                fullName: string;
                avatarUrl: string | null;
                department: string | null;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            type: import("../generated/prisma/enums").NotificationType;
            receiverId: string;
            actorId: string | null;
            entityType: string;
            entityId: string;
            isRead: boolean;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
            unreadCount: number;
        };
    }>;
    unreadCount(userId: string): Promise<{
        unreadCount: number;
    }>;
    markAllAsRead(userId: string): Promise<{
        updatedCount: number;
    }>;
    markSelectedAsRead(userId: string, ids: string[]): Promise<{
        updatedCount: number;
    }>;
    deleteNotification(userId: string, id: string): Promise<{
        deleted: boolean;
    }>;
}
