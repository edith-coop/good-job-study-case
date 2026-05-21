import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ListNotificationsQuery } from './dtos/list-notifications.query';
import { RealtimeGateway } from '../realtime/realtime.gateway';

@Injectable()
export class NotificationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly realtimeGateway: RealtimeGateway,
  ) {}

  async createNotification(input: {
    receiverId: string;
    actorId?: string | null;
    type: string;
    entityType: string;
    entityId: string;
  }) {
    const notification = await this.prisma.notification.create({
      data: {
        receiverId: input.receiverId,
        actorId: input.actorId ?? null,
        type: input.type as never,
        entityType: input.entityType,
        entityId: input.entityId,
      },
      include: {
        actor: {
          select: {
            id: true,
            email: true,
            fullName: true,
            avatarUrl: true,
            department: true,
          },
        },
      },
    });

    this.realtimeGateway.emitNotification(input.receiverId, notification);

    return notification;
  }

  async list(userId: string, query: ListNotificationsQuery) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const skip = (page - 1) * limit;

    const [items, total, unreadCount] = await this.prisma.$transaction([
      this.prisma.notification.findMany({
        where: { receiverId: userId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        include: {
          actor: {
            select: {
              id: true,
              email: true,
              fullName: true,
              avatarUrl: true,
              department: true,
            },
          },
        },
      }),
      this.prisma.notification.count({
        where: { receiverId: userId },
      }),
      this.prisma.notification.count({
        where: { receiverId: userId, isRead: false },
      }),
    ]);

    return {
      items,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        unreadCount,
      },
    };
  }

  async unreadCount(userId: string) {
    const count = await this.prisma.notification.count({
      where: { receiverId: userId, isRead: false },
    });

    return { unreadCount: count };
  }

  async markAllAsRead(userId: string) {
    const result = await this.prisma.notification.updateMany({
      where: { receiverId: userId, isRead: false },
      data: { isRead: true },
    });

    this.realtimeGateway.emitNotificationRead(userId, {
      updatedCount: result.count,
      mode: 'all',
    });

    return { updatedCount: result.count };
  }

  async markSelectedAsRead(userId: string, ids: string[]) {
    const result = await this.prisma.notification.updateMany({
      where: {
        receiverId: userId,
        id: { in: ids },
      },
      data: { isRead: true },
    });

    this.realtimeGateway.emitNotificationRead(userId, {
      updatedCount: result.count,
      mode: 'selected',
      ids,
    });

    return { updatedCount: result.count };
  }

  async deleteNotification(userId: string, id: string) {
    const notification = await this.prisma.notification.findFirst({
      where: { id, receiverId: userId },
    });

    if (!notification) {
      throw new NotFoundException('Notification not found');
    }

    await this.prisma.notification.delete({ where: { id } });

    return { deleted: true };
  }
}
