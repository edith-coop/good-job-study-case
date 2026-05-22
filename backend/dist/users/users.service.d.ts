import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dtos/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<{
        id: string;
        email: string;
        fullName: string;
        avatarUrl: string | null;
        department: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    listUsers(): Promise<{
        id: string;
        email: string;
        fullName: string;
        avatarUrl: string | null;
        department: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    private getCurrentMonth;
    getCurrentGivingBudget(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        month: string;
        totalBudget: number;
        usedBudget: number;
        remainingBudget: number;
        resetAt: Date | null;
    } | {
        month: string;
        totalBudget: number;
        usedBudget: number;
        remainingBudget: number;
        resetAt: null;
    }>;
    getPointBalance(userId: string): Promise<number>;
    getProfile(id: string): Promise<{
        currentGivingBudget: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            month: string;
            totalBudget: number;
            usedBudget: number;
            remainingBudget: number;
            resetAt: Date | null;
        } | {
            month: string;
            totalBudget: number;
            usedBudget: number;
            remainingBudget: number;
            resetAt: null;
        };
        pointBalance: number;
        id: string;
        email: string;
        fullName: string;
        avatarUrl: string | null;
        department: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateProfile(userId: string, dto: UpdateUserDto): Promise<{
        id: string;
        email: string;
        fullName: string;
        avatarUrl: string | null;
        department: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
