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
            sender: {
                select: {
                    id: true,
                    email: true,
                    fullName: true,
                    avatarUrl: true,
                    department: true,
                },
            },
            receiver: {
                select: {
                    id: true,
                    email: true,
                    fullName: true,
                    avatarUrl: true,
                    department: true,
                },
            },
            media: true,
            comments: {
                orderBy: { createdAt: 'desc' },
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            fullName: true,
                            avatarUrl: true,
                            department: true,
                        },
                    },
                    media: true,
                },
            },
            reactions: true,
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
        if (!sender) {
            throw new common_1.NotFoundException('Sender not found');
        }
        if (!receiver) {
            throw new common_1.NotFoundException('Receiver not found');
        }
        return { sender, receiver };
    }
    async ensureMonthlyBudget(tx, senderId, points) {
        const month = this.getCurrentMonth();
        const budget = await tx.monthlyGivingBudget.upsert({
            where: {
                userId_month: {
                    userId: senderId,
                    month,
                },
            },
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
            data: {
                usedBudget: { increment: points },
                remainingBudget: { decrement: points },
            },
        });
    }
    async createKudoRecord(tx, senderId, dto) {
        return tx.kudo.create({
            data: {
                senderId,
                receiverId: dto.receiverId,
                points: dto.points,
                coreValue: dto.coreValue,
                message: dto.message,
                visibility: dto.visibility ?? client_1.Visibility.PUBLIC,
                media: dto.media?.length
                    ? {
                        create: dto.media.map((item) => ({
                            mediaType: item.mediaType,
                            mediaUrl: item.mediaUrl,
                            durationSeconds: item.durationSeconds ?? 0,
                        })),
                    }
                    : undefined,
            },
            include: this.includeKudo,
        });
    }
    async createPointLedgers(tx, senderId, receiverId, points, kudoId, senderFullName, receiverFullName) {
        return tx.pointLedger.createMany({
            data: [
                {
                    userId: senderId,
                    type: 'GIVE',
                    amount: -points,
                    referenceType: 'KUDO',
                    referenceId: kudoId,
                    description: `Give ${points} points to ${receiverFullName}`,
                },
                {
                    userId: receiverId,
                    type: 'RECEIVE',
                    amount: points,
                    referenceType: 'KUDO',
                    referenceId: kudoId,
                    description: `Receive ${points} points from ${senderFullName}`,
                },
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
    async create(senderId, dto) {
        if (senderId === dto.receiverId) {
            throw new common_1.ForbiddenException('You cannot send a kudo to yourself');
        }
        if (dto.points < 10 || dto.points > 50) {
            throw new common_1.BadRequestException('Points must be between 10 and 50');
        }
        const { sender, receiver } = await this.loadSenderAndReceiver(senderId, dto.receiverId);
        let createdKudo;
        let updatedBudget;
        try {
            await this.prisma.$transaction(async (tx) => {
                const budget = await this.ensureMonthlyBudget(tx, senderId, dto.points);
                updatedBudget = await this.updateMonthlyBudget(tx, budget.id, dto.points);
                createdKudo = await this.createKudoRecord(tx, senderId, dto);
                await this.createPointLedgers(tx, senderId, dto.receiverId, dto.points, createdKudo.id, sender.fullName, receiver.fullName);
            });
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.BadRequestException(error || error);
        }
        try {
            await this.notifyKudoReceiver(senderId, dto.receiverId, createdKudo.id);
        }
        catch (notificationError) {
            console.error('Failed to send notification:', notificationError);
        }
        return {
            kudo: createdKudo,
            budget: updatedBudget,
        };
    }
    async list(query) {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const skip = (page - 1) * limit;
        const [items, total] = await this.prisma.$transaction([
            this.prisma.kudo.findMany({
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: this.includeKudo,
            }),
            this.prisma.kudo.count(),
        ]);
        return {
            items,
            meta: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async getById(id) {
        const kudo = await this.prisma.kudo.findUnique({
            where: { id },
            include: this.includeKudo,
        });
        if (!kudo) {
            throw new common_1.NotFoundException('Kudo not found');
        }
        return kudo;
    }
    async addComment(userId, kudoId, dto) {
        try {
            const kudo = await this.prisma.kudo.findUnique({ where: { id: kudoId } });
            if (!kudo) {
                throw new common_1.NotFoundException('Kudo not found');
            }
            return this.prisma.$transaction(async (tx) => {
                const comment = await tx.kudoComment.create({
                    data: {
                        kudoId,
                        userId,
                        content: dto.content,
                        media: dto.media?.length
                            ? {
                                create: dto.media.map((item) => ({
                                    mediaType: item.mediaType,
                                    mediaUrl: item.mediaUrl,
                                })),
                            }
                            : undefined,
                    },
                    include: {
                        user: {
                            select: {
                                id: true,
                                email: true,
                                fullName: true,
                                avatarUrl: true,
                                department: true,
                            },
                        },
                        media: true,
                    },
                });
                await this.notificationsService.createNotification({
                    receiverId: kudo.receiverId,
                    actorId: userId,
                    type: 'COMMENT',
                    entityType: 'KudoComment',
                    entityId: comment.id,
                });
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
            if (!kudo) {
                throw new common_1.NotFoundException('Kudo not found');
            }
            const existing = await this.prisma.kudoReaction.findFirst({
                where: {
                    kudoId,
                    userId,
                    emoji: dto.emoji,
                },
            });
            if (existing) {
                throw new common_1.BadRequestException('Reaction already exists');
            }
            return this.prisma.$transaction(async (tx) => {
                const reaction = await tx.kudoReaction.create({
                    data: {
                        kudoId,
                        userId,
                        emoji: dto.emoji,
                    },
                });
                await this.notificationsService.createNotification({
                    receiverId: kudo.receiverId,
                    actorId: userId,
                    type: 'REACTION',
                    entityType: 'KudoReaction',
                    entityId: reaction.id,
                });
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