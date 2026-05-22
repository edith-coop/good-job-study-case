"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KudosService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../generated/prisma/client");
const notifications_service_1 = require("../notifications/notifications.service");
const prisma_service_1 = require("../prisma/prisma.service");
let KudosService = class KudosService {
    constructor(prisma, notificationsService) {
        this.prisma = prisma;
        this.notificationsService = notificationsService;
        this.includeKudo = {
            sender: { select: { id: true, email: true, fullName: true, avatarUrl: true, department: true } },
            receiver: { select: { id: true, email: true, fullName: true, avatarUrl: true, department: true } },
            media: true,
            comments: {
                orderBy: { createdAt: 'desc' },
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
        };
    }
    getCurrentMonth() {
        return new Date().toISOString().slice(0, 7);
    }
    async loadSenderAndReceiver(senderId, receiverId) {
        const [sender, receiver] = await Promise.all([
            this.prisma.user.findUnique({ where: { id: senderId } }),
            this.prisma.user.findUnique({ where: { id: receiverId } }),
        ]);
        if (!sender)
            throw new common_1.NotFoundException('Sender not found');
        if (!receiver)
            throw new common_1.NotFoundException('Receiver not found');
        return { sender, receiver };
    }
    validateTaggedUserIds(senderId, taggedUserIds) {
        if (!taggedUserIds?.length)
            return;
        const uniqueTaggedUserIds = new Set(taggedUserIds);
        if (uniqueTaggedUserIds.size !== taggedUserIds.length) {
            throw new common_1.BadRequestException('taggedUserIds must not contain duplicates');
        }
        if (uniqueTaggedUserIds.has(senderId)) {
            throw new common_1.BadRequestException('You cannot tag yourself');
        }
    }
    async ensureMonthlyBudget(tx, senderId, points) {
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
            throw new common_1.BadRequestException('Monthly budget exceeded');
        }
        return budget;
    }
    async updateMonthlyBudget(tx, budgetId, points) {
        return tx.monthlyGivingBudget.update({
            where: { id: budgetId },
            data: { usedBudget: { increment: points }, remainingBudget: { decrement: points } },
        });
    }
    async createKudoRecord(tx, senderId, dto, type, visibility, receiverId, points = 0) {
        return tx.kudo.create({
            data: {
                coreValue: "",
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
    async createPointLedgers(tx, senderId, receiverId, points, kudoId, senderFullName, receiverFullName) {
        return tx.pointLedger.createMany({
            data: [
                { userId: senderId, type: 'GIVE', amount: -points, referenceType: 'KUDO', referenceId: kudoId, description: `Give ${points} points to ${receiverFullName}` },
                { userId: receiverId, type: 'RECEIVE', amount: points, referenceType: 'KUDO', referenceId: kudoId, description: `Receive ${points} points from ${senderFullName}` },
            ],
        });
    }
    async notifyKudoReceiver(senderId, receiverId, kudoId) {
        await this.notificationsService.createNotification({
            receiverId,
            actorId: senderId,
            type: 'KUDO_RECEIVED',
            entityType: 'Kudo',
            entityId: kudoId,
        });
    }
    async notifyTaggedUsers(senderId, taggedUserIds, kudoId) {
        if (!taggedUserIds?.length)
            return;
        const uniqueTaggedUserIds = [...new Set(taggedUserIds.filter((id) => id !== senderId))];
        await Promise.all(uniqueTaggedUserIds.map((userId) => this.notificationsService.createNotification({
            receiverId: userId,
            actorId: senderId,
            type: 'TAGGED',
            entityType: 'Kudo',
            entityId: kudoId,
        })));
    }
    async create(senderId, dto) {
        if (senderId === dto.receiverId)
            throw new common_1.ForbiddenException('You cannot send a kudo to yourself');
        if (dto.points < 10 || dto.points > 50)
            throw new common_1.BadRequestException('Points must be between 10 and 50');
        this.validateTaggedUserIds(senderId, dto.taggedUserIds);
        const { sender, receiver } = await this.loadSenderAndReceiver(senderId, dto.receiverId);
        let createdKudo;
        let updatedBudget;
        try {
            await this.prisma.$transaction(async (tx) => {
                const budget = await this.ensureMonthlyBudget(tx, senderId, dto.points);
                updatedBudget = await this.updateMonthlyBudget(tx, budget.id, dto.points);
                createdKudo = await this.createKudoRecord(tx, senderId, dto, client_1.KudoType.PEER_RECOGNITION, client_1.Visibility.PRIVATE, dto.receiverId, dto.points);
                await this.createPointLedgers(tx, senderId, dto.receiverId, dto.points, createdKudo.id, sender.fullName, receiver.fullName);
            }, {
                maxWait: 5000,
                timeout: 15000,
            });
        }
        catch (error) {
            if (error instanceof Error)
                throw new common_1.BadRequestException(error.message);
            throw new common_1.BadRequestException('Failed to create kudo');
        }
        try {
            await Promise.all([
                this.notifyKudoReceiver(senderId, dto.receiverId, createdKudo.id),
                this.notifyTaggedUsers(senderId, dto.taggedUserIds, createdKudo.id),
            ]);
        }
        catch (error) {
            console.error('Failed to send notification:', error);
        }
        return { kudo: createdKudo, budget: updatedBudget };
    }
    async createFeed(senderId, dto) {
        this.validateTaggedUserIds(senderId, dto.taggedUserIds);
        const sender = await this.prisma.user.findUnique({ where: { id: senderId } });
        if (!sender)
            throw new common_1.NotFoundException('Sender not found');
        const kudo = await this.prisma.$transaction(async (tx) => {
            return this.createKudoRecord(tx, senderId, dto, client_1.KudoType.LIVE_FEED, client_1.Visibility.PUBLIC, senderId, 0);
        }, {
            maxWait: 5000,
            timeout: 15000,
        });
        try {
            await this.notifyTaggedUsers(senderId, dto.taggedUserIds, kudo.id);
        }
        catch (error) {
            console.error('Failed to send notification:', error);
        }
        return { kudo };
    }
    async list(query) {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const skip = (page - 1) * limit;
        const [items, total] = await this.prisma.$transaction([
            this.prisma.kudo.findMany({ where: { type: client_1.KudoType.LIVE_FEED }, skip, take: limit, orderBy: { createdAt: 'desc' }, include: this.includeKudo }),
            this.prisma.kudo.count({ where: { type: client_1.KudoType.LIVE_FEED } }),
        ]);
        return { items, meta: { page, limit, total, totalPages: Math.ceil(total / limit) } };
    }
    async listSent(senderId, query) {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const skip = (page - 1) * limit;
        const [items, total] = await this.prisma.$transaction([
            this.prisma.kudo.findMany({ where: { senderId, type: client_1.KudoType.PEER_RECOGNITION }, skip, take: limit, orderBy: { createdAt: 'desc' }, include: this.includeKudo }),
            this.prisma.kudo.count({ where: { senderId, type: client_1.KudoType.PEER_RECOGNITION } }),
        ]);
        return { items, meta: { page, limit, total, totalPages: Math.ceil(total / limit) } };
    }
    async listReceived(receiverId, query) {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const skip = (page - 1) * limit;
        const [items, total] = await this.prisma.$transaction([
            this.prisma.kudo.findMany({ where: { receiverId, type: client_1.KudoType.PEER_RECOGNITION }, skip, take: limit, orderBy: { createdAt: 'desc' }, include: this.includeKudo }),
            this.prisma.kudo.count({ where: { receiverId, type: client_1.KudoType.PEER_RECOGNITION } }),
        ]);
        return { items, meta: { page, limit, total, totalPages: Math.ceil(total / limit) } };
    }
    async getById(id) {
        const kudo = await this.prisma.kudo.findUnique({ where: { id }, include: this.includeKudo });
        if (!kudo)
            throw new common_1.NotFoundException('Kudo not found');
        return kudo;
    }
    async addComment(userId, kudoId, dto) {
        try {
            const kudo = await this.prisma.kudo.findUnique({ where: { id: kudoId } });
            if (!kudo)
                throw new common_1.NotFoundException('Kudo not found');
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
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async addReaction(userId, kudoId, dto) {
        try {
            const kudo = await this.prisma.kudo.findUnique({ where: { id: kudoId } });
            if (!kudo)
                throw new common_1.NotFoundException('Kudo not found');
            return this.prisma.$transaction(async (tx) => {
                const existingReaction = await tx.kudoReaction.findFirst({ where: { kudoId, userId } });
                const reaction = existingReaction
                    ? await tx.kudoReaction.update({ where: { id: existingReaction.id }, data: { emoji: dto.emoji } })
                    : await tx.kudoReaction.create({ data: { kudoId, userId, emoji: dto.emoji } });
                await this.notificationsService.createNotification({ receiverId: kudo.receiverId, actorId: userId, type: 'REACTION', entityType: 'KudoReaction', entityId: reaction.id });
                return reaction;
            });
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
exports.KudosService = KudosService;
exports.KudosService = KudosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notifications_service_1.NotificationsService])
], KudosService);
//# sourceMappingURL=kudos.service.js.map