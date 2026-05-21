import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RedemptionStatus } from '../generated/prisma/enums';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRewardDto } from './dtos/create-reward.dto';

@Injectable()
export class RewardsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateRewardDto) {
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

  async findById(id: string) {
    const reward = await this.prisma.rewardCatalog.findUnique({ where: { id } });
    if (!reward) {
      throw new NotFoundException('Reward not found');
    }

    return reward;
  }

  async redeem(userId: string, rewardId: string) {
    const reward = await this.prisma.rewardCatalog.findUnique({
      where: { id: rewardId },
    });

    if (!reward) {
      throw new NotFoundException('Reward not found');
    }

    if (!reward.isActive) {
      throw new BadRequestException('Reward is inactive');
    }

    return this.prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { id: userId },
        select: { id: true },
      });

      if (!user) {
        throw new NotFoundException('User not found');
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
        throw new BadRequestException('Reward is inactive');
      }

      if (currentReward.stockQuantity <= 0) {
        throw new ConflictException('Reward is out of stock');
      }

      const currentBalance = balanceAgg._sum.amount ?? 0;
      if (currentBalance < reward.costPoints) {
        throw new BadRequestException('Insufficient points');
      }

      const updatedReward = await tx.rewardCatalog.update({
        where: { id: rewardId },
        data: {
          stockQuantity: { decrement: 1 },
        },
      });

      if (updatedReward.stockQuantity < 0) {
        throw new ConflictException('Reward is out of stock');
      }

      const redemption = await tx.rewardRedemption.create({
        data: {
          userId,
          rewardId,
          pointsSpent: reward.costPoints,
          status: RedemptionStatus.PENDING,
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

  async getRedemptionById(id: string) {
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
      throw new NotFoundException('Redemption not found');
    }

    return redemption;
  }

  async updateRedemptionStatus(id: string, status: RedemptionStatus) {
    const redemption = await this.prisma.rewardRedemption.findUnique({
      where: { id },
    });

    if (!redemption) {
      throw new NotFoundException('Redemption not found');
    }

    if (redemption.status !== RedemptionStatus.PENDING) {
      throw new BadRequestException('Redemption already finalized');
    }

    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.rewardRedemption.update({
        where: { id },
        data: { status },
      });

      if (status === RedemptionStatus.REJECTED) {
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
}
