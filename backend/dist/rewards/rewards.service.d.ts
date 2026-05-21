import { RedemptionStatus } from '../generated/prisma/enums';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRewardDto } from './dtos/create-reward.dto';
export declare class RewardsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateRewardDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        costPoints: number;
        stockQuantity: number;
        isActive: boolean;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        costPoints: number;
        stockQuantity: number;
        isActive: boolean;
    }[]>;
    findById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        costPoints: number;
        stockQuantity: number;
        isActive: boolean;
    }>;
    redeem(userId: string, rewardId: string): Promise<{
        redemption: {
            id: string;
            pointsSpent: number;
            status: RedemptionStatus;
            redeemedAt: Date;
            userId: string;
            rewardId: string;
        };
        reward: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            costPoints: number;
            stockQuantity: number;
            isActive: boolean;
        };
    }>;
    listRedemptions(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        user: {
            id: string;
            email: string;
            fullName: string;
            avatarUrl: string | null;
            department: string | null;
        };
        reward: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            costPoints: number;
            stockQuantity: number;
            isActive: boolean;
        };
    } & {
        id: string;
        pointsSpent: number;
        status: RedemptionStatus;
        redeemedAt: Date;
        userId: string;
        rewardId: string;
    })[]>;
    getRedemptionById(id: string): Promise<{
        user: {
            id: string;
            email: string;
            fullName: string;
            avatarUrl: string | null;
            department: string | null;
        };
        reward: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            costPoints: number;
            stockQuantity: number;
            isActive: boolean;
        };
    } & {
        id: string;
        pointsSpent: number;
        status: RedemptionStatus;
        redeemedAt: Date;
        userId: string;
        rewardId: string;
    }>;
    updateRedemptionStatus(id: string, status: RedemptionStatus): Promise<{
        id: string;
        pointsSpent: number;
        status: RedemptionStatus;
        redeemedAt: Date;
        userId: string;
        rewardId: string;
    }>;
}
