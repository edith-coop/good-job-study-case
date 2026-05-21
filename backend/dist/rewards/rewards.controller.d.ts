import { CreateRewardDto } from './dtos/create-reward.dto';
import { RedeemRewardDto } from './dtos/redeem-reward.dto';
import { UpdateRedemptionStatusDto } from './dtos/update-redemption-status.dto';
import { RewardsService } from './rewards.service';
export declare class RewardsController {
    private readonly rewardsService;
    constructor(rewardsService: RewardsService);
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
    redeem(userId: string, dto: RedeemRewardDto): Promise<{
        redemption: {
            id: string;
            pointsSpent: number;
            status: import("../generated/prisma/enums").RedemptionStatus;
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
        status: import("../generated/prisma/enums").RedemptionStatus;
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
        status: import("../generated/prisma/enums").RedemptionStatus;
        redeemedAt: Date;
        userId: string;
        rewardId: string;
    }>;
    updateRedemptionStatus(id: string, dto: UpdateRedemptionStatusDto): Promise<{
        id: string;
        pointsSpent: number;
        status: import("../generated/prisma/enums").RedemptionStatus;
        redeemedAt: Date;
        userId: string;
        rewardId: string;
    }>;
}
