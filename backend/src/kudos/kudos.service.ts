import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { KudoType, Prisma, Visibility } from '../generated/prisma/client';
import { NotificationsService } from '../notifications/notifications.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { CreateFeedPostDto } from './dtos/create-feed-post.dto';
import { CreateKudoDto } from './dtos/create-kudo.dto';
import { CreateReactionDto } from './dtos/create-reaction.dto';
import { ListKudosQuery } from './dtos/list-kudos.query';

@Injectable()
export class KudosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
  ) {}

  private readonly includeKudo = {
    sender: { select: { id: true, email: true, fullName: true, avatarUrl: true, department: true } },
    receiver: { select: { id: true, email: true, fullName: true, avatarUrl: true, department: true } },
    media: true,
    comments: {
      orderBy: { createdAt: 'desc' as const },
      include: {
        user: { select: { id: true, email: true, fullName: true, avatarUrl: true, department: true } },
        media: true,
      },
    },
    reactions: true,
    tags: {
      include: {
        user: { select: { id: true, email: true, fullName: true, avatarUrl: true, department: true } },
      },
    },
  } satisfies Prisma.KudoInclude;

  private getCurrentMonth() {
    return new Date().toISOString().slice(0, 7);
  }

  private async loadSenderAndReceiver(senderId: string, receiverId: string) {
    const [sender, receiver] = await Promise.all([
      this.prisma.user.findUnique({ where: { id: senderId } }),
      this.prisma.user.findUnique({ where: { id: receiverId } }),
    ]);

    if (!sender) throw new NotFoundException('Sender not found');
    if (!receiver) throw new NotFoundException('Receiver not found');

    return { sender, receiver };
  }

  private validateTaggedUserIds(senderId: string, taggedUserIds?: string[]) {
    if (!taggedUserIds?.length) return;
    const uniqueTaggedUserIds = new Set(taggedUserIds);
    if (uniqueTaggedUserIds.size !== taggedUserIds.length) {
      throw new BadRequestException('taggedUserIds must not contain duplicates');
    }
    if (uniqueTaggedUserIds.has(senderId)) {
      throw new BadRequestException('You cannot tag yourself');
    }
  }

  private async ensureMonthlyBudget(
    tx: Prisma.TransactionClient,
    senderId: string,
    points: number,
  ) {
    const month = this.getCurrentMonth();

    const budget = await tx.monthlyGivingBudget.upsert({
      where: { userId_month: { userId: senderId, month } },
      update: {},
      create: {
        userId: senderId,
        month,
        totalBudget: 200,
        usedBudget: 0,
        remainingBudget: 200,
      },
    });

    if (budget.remainingBudget < points) {
      throw new BadRequestException('Monthly budget exceeded');
    }

    return budget;
  }

  private async updateMonthlyBudget(tx: Prisma.TransactionClient, budgetId: string, points: number) {
    return tx.monthlyGivingBudget.update({
      where: { id: budgetId },
      data: { usedBudget: { increment: points }, remainingBudget: { decrement: points } },
    });
  }

  private async createKudoRecord(
    tx: Prisma.TransactionClient,
    senderId: string,
    dto: Pick<CreateKudoDto | CreateFeedPostDto, 'message' | 'coreValue' | 'media' | 'taggedUserIds'>,
    type: KudoType,
    visibility: Visibility,
    receiverId: string,
    points = 0,
  ) {
    return tx.kudo.create({
      data: {
        coreValue:"",
        senderId,
        receiverId,
        type,
        points,
        message: dto.message,
        visibility,
        media: dto.media?.length
          ? { create: dto.media.map((item) => ({ mediaType: item.mediaType, mediaUrl: item.mediaUrl, durationSeconds: item.durationSeconds ?? 0 })) }
          : undefined,
        tags: dto.taggedUserIds?.length ? { create: dto.taggedUserIds.map((userId) => ({ userId })) } : undefined,
      },
      include: this.includeKudo,
    });
  }

  private async createPointLedgers(
    tx: Prisma.TransactionClient,
    senderId: string,
    receiverId: string,
    points: number,
    kudoId: string,
    senderFullName: string,
    receiverFullName: string,
  ) {
    return tx.pointLedger.createMany({
      data: [
        { userId: senderId, type: 'GIVE', amount: -points, referenceType: 'KUDO', referenceId: kudoId, description: `Give ${points} points to ${receiverFullName}` },
        { userId: receiverId, type: 'RECEIVE', amount: points, referenceType: 'KUDO', referenceId: kudoId, description: `Receive ${points} points from ${senderFullName}` },
      ],
    });
  }

  private async notifyKudoReceiver(senderId: string, receiverId: string, kudoId: string) {
    await this.notificationsService.createNotification({
      receiverId,
      actorId: senderId,
      type: 'KUDO_RECEIVED',
      entityType: 'Kudo',
      entityId: kudoId,
    });
  }

  private async notifyTaggedUsers(senderId: string, taggedUserIds: string[] | undefined, kudoId: string) {
    if (!taggedUserIds?.length) return;
    const uniqueTaggedUserIds = [...new Set(taggedUserIds.filter((id) => id !== senderId))];
    await Promise.all(
      uniqueTaggedUserIds.map((userId) =>
        this.notificationsService.createNotification({
          receiverId: userId,
          actorId: senderId,
          type: 'TAGGED',
          entityType: 'Kudo',
          entityId: kudoId,
        }),
      ),
    );
  }

  async create(senderId: string, dto: CreateKudoDto) {
    if (senderId === dto.receiverId) throw new ForbiddenException('You cannot send a kudo to yourself');
    if (dto.points < 10 || dto.points > 50) throw new BadRequestException('Points must be between 10 and 50');

    this.validateTaggedUserIds(senderId, dto.taggedUserIds);

    const { sender, receiver } = await this.loadSenderAndReceiver(senderId, dto.receiverId);

    let createdKudo: any;
    let updatedBudget: any;

    try {
      await this.prisma.$transaction(
        async (tx) => {
          const budget = await this.ensureMonthlyBudget(tx, senderId, dto.points);
          updatedBudget = await this.updateMonthlyBudget(tx, budget.id, dto.points);
          createdKudo = await this.createKudoRecord(
            tx,
            senderId,
            dto,
            KudoType.PEER_RECOGNITION,
            Visibility.PRIVATE,
            dto.receiverId,
            dto.points,
          );
          await this.createPointLedgers(tx, senderId, dto.receiverId, dto.points, createdKudo.id, sender.fullName, receiver.fullName);
        },
        {
          maxWait: 5000,
          timeout: 15000,
        },
      );
    } catch (error) {
      if (error instanceof Error) throw new BadRequestException(error.message);
      throw new BadRequestException('Failed to create kudo');
    }

    try {
      await Promise.all([
        this.notifyKudoReceiver(senderId, dto.receiverId, createdKudo.id),
        this.notifyTaggedUsers(senderId, dto.taggedUserIds, createdKudo.id),
      ]);
    } catch (error) {
      console.error('Failed to send notification:', error);
    }

    return { kudo: createdKudo, budget: updatedBudget };
  }

  async createFeed(senderId: string, dto: CreateFeedPostDto) {
    this.validateTaggedUserIds(senderId, dto.taggedUserIds);

    const sender = await this.prisma.user.findUnique({ where: { id: senderId } });
    if (!sender) throw new NotFoundException('Sender not found');

    const kudo = await this.prisma.$transaction(
      async (tx) => {
        return this.createKudoRecord(tx, senderId, dto, KudoType.LIVE_FEED, Visibility.PUBLIC, senderId, 0);
      },
      {
        maxWait: 5000,
        timeout: 15000,
      },
    );

    try {
      await this.notifyTaggedUsers(senderId, dto.taggedUserIds, kudo.id);
    } catch (error) {
      console.error('Failed to send notification:', error);
    }

    return { kudo };
  }

  async list(query: ListKudosQuery) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.kudo.findMany({ where: { type: KudoType.LIVE_FEED }, skip, take: limit, orderBy: { createdAt: 'desc' }, include: this.includeKudo }),
      this.prisma.kudo.count({ where: { type: KudoType.LIVE_FEED } }),
    ]);

    return { items, meta: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  }

  async listSent(senderId: string, query: ListKudosQuery) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.kudo.findMany({ where: { senderId, type: KudoType.PEER_RECOGNITION }, skip, take: limit, orderBy: { createdAt: 'desc' }, include: this.includeKudo }),
      this.prisma.kudo.count({ where: { senderId, type: KudoType.PEER_RECOGNITION } }),
    ]);

    return { items, meta: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  }

  async listReceived(receiverId: string, query: ListKudosQuery) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.kudo.findMany({ where: { receiverId, type: KudoType.PEER_RECOGNITION }, skip, take: limit, orderBy: { createdAt: 'desc' }, include: this.includeKudo }),
      this.prisma.kudo.count({ where: { receiverId, type: KudoType.PEER_RECOGNITION } }),
    ]);

    return { items, meta: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  }

  async getById(id: string) {
    const kudo = await this.prisma.kudo.findUnique({ where: { id }, include: this.includeKudo });
    if (!kudo) throw new NotFoundException('Kudo not found');
    return kudo;
  }

  async addComment(userId: string, kudoId: string, dto: CreateCommentDto) {
    try {
      const kudo = await this.prisma.kudo.findUnique({ where: { id: kudoId } });
      if (!kudo) throw new NotFoundException('Kudo not found');

      return this.prisma.$transaction(async (tx) => {
        const comment = await tx.kudoComment.create({
          data: {
            kudoId,
            userId,
            content: dto.content,
            media: dto.media?.length ? { create: dto.media.map((item) => ({ mediaType: item.mediaType, mediaUrl: item.mediaUrl })) } : undefined,
          },
          include: { user: { select: { id: true, email: true, fullName: true, avatarUrl: true, department: true } }, media: true },
        });

        await this.notificationsService.createNotification({ receiverId: kudo.receiverId, actorId: userId, type: 'COMMENT', entityType: 'KudoComment', entityId: comment.id });
        return comment;
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async addReaction(userId: string, kudoId: string, dto: CreateReactionDto) {
    try {
      const kudo = await this.prisma.kudo.findUnique({ where: { id: kudoId } });
      if (!kudo) throw new NotFoundException('Kudo not found');

      return this.prisma.$transaction(async (tx) => {
        const existingReaction = await tx.kudoReaction.findFirst({ where: { kudoId, userId } });
        const reaction = existingReaction
          ? await tx.kudoReaction.update({ where: { id: existingReaction.id }, data: { emoji: dto.emoji } })
          : await tx.kudoReaction.create({ data: { kudoId, userId, emoji: dto.emoji } });

        await this.notificationsService.createNotification({ receiverId: kudo.receiverId, actorId: userId, type: 'REACTION', entityType: 'KudoReaction', entityId: reaction.id });
        return reaction;
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
