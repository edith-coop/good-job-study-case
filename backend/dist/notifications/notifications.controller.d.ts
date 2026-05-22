import { ListNotificationsQuery } from './dtos/list-notifications.query';
import { MarkReadDto } from './dtos/mark-read.dto';
import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
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
    markSelectedAsRead(userId: string, dto: MarkReadDto): Promise<{
        updatedCount: number;
    }>;
    deleteNotification(userId: string, id: string): Promise<{
        deleted: boolean;
    }>;
}
