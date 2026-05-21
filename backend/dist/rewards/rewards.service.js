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
exports.RewardsService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../generated/prisma/enums");
const prisma_service_1 = require("../prisma/prisma.service");
let RewardsService = class RewardsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.rewardCatalog.create({
            data: {
                title: dto.title,
                description: dto.description,
                costPoints: dto.costPoints,
                stockQuantity: dto.stockQuantity ?? 0,
                isActive: dto.isActive ?? true,
            },
        });
    }
    findAll() {
        return this.prisma.rewardCatalog.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async findById(id) {
        const reward = await this.prisma.rewardCatalog.findUnique({ where: { id } });
        if (!reward) {
            throw new common_1.NotFoundException('Reward not found');
        }
        return reward;
    }
    async redeem(userId, rewardId) {
        const reward = await this.prisma.rewardCatalog.findUnique({
            where: { id: rewardId },
        });
        if (!reward) {
            throw new common_1.NotFoundException('Reward not found');
        }
        if (!reward.isActive) {
            throw new common_1.BadRequestException('Reward is inactive');
        }
        return this.prisma.$transaction(async (tx) => {
            const user = await tx.user.findUnique({
                where: { id: userId },
                select: { id: true },
            });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            const [balanceAgg, currentReward] = await Promise.all([
                tx.pointLedger.aggregate({
                    where: { userId },
                    _sum: { amount: true },
                }),
                tx.rewardCatalog.findUnique({
                    where: { id: rewardId },
                    select: { id: true, stockQuantity: true, isActive: true },
                }),
            ]);
            if (!currentReward || !currentReward.isActive) {
                throw new common_1.BadRequestException('Reward is inactive');
            }
            if (currentReward.stockQuantity <= 0) {
                throw new common_1.ConflictException('Reward is out of stock');
            }
            const currentBalance = balanceAgg._sum.amount ?? 0;
            if (currentBalance < reward.costPoints) {
                throw new common_1.BadRequestException('Insufficient points');
            }
            const updatedReward = await tx.rewardCatalog.update({
                where: { id: rewardId },
                data: {
                    stockQuantity: { decrement: 1 },
                },
            });
            if (updatedReward.stockQuantity < 0) {
                throw new common_1.ConflictException('Reward is out of stock');
            }
            const redemption = await tx.rewardRedemption.create({
                data: {
                    userId,
                    rewardId,
                    pointsSpent: reward.costPoints,
                    status: enums_1.RedemptionStatus.PENDING,
                },
            });
            await tx.pointLedger.create({
                data: {
                    userId,
                    type: 'REDEEM',
                    amount: -reward.costPoints,
                    referenceType: 'REWARD',
                    referenceId: redemption.id,
                    description: `Redeem reward: ${reward.title}`,
                },
            });
            return {
                redemption,
                reward: updatedReward,
            };
        });
    }
    listRedemptions() {
        return this.prisma.rewardRedemption.findMany({
            orderBy: { redeemedAt: 'desc' },
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
                reward: true,
            },
        });
    }
    async getRedemptionById(id) {
        const redemption = await this.prisma.rewardRedemption.findUnique({
            where: { id },
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
                reward: true,
            },
        });
        if (!redemption) {
            throw new common_1.NotFoundException('Redemption not found');
        }
        return redemption;
    }
    async updateRedemptionStatus(id, status) {
        const redemption = await this.prisma.rewardRedemption.findUnique({
            where: { id },
        });
        if (!redemption) {
            throw new common_1.NotFoundException('Redemption not found');
        }
        if (redemption.status !== enums_1.RedemptionStatus.PENDING) {
            throw new common_1.BadRequestException('Redemption already finalized');
        }
        return this.prisma.$transaction(async (tx) => {
            const updated = await tx.rewardRedemption.update({
                where: { id },
                data: { status },
            });
            if (status === enums_1.RedemptionStatus.REJECTED) {
                await tx.pointLedger.create({
                    data: {
                        userId: redemption.userId,
                        type: 'ADMIN_ADJUST',
                        amount: redemption.pointsSpent,
                        referenceType: 'REWARD',
                        referenceId: redemption.id,
                        description: 'Refund rejected reward redemption',
                    },
                });
                await tx.rewardCatalog.update({
                    where: { id: redemption.rewardId },
                    data: { stockQuantity: { increment: 1 } },
                });
            }
            return updated;
        });
    }
};
exports.RewardsService = RewardsService;
exports.RewardsService = RewardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RewardsService);
//# sourceMappingURL=rewards.service.js.map