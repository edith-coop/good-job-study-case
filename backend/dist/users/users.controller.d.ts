import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    me(req: {
        user: {
            sub: string;
        };
    }): Promise<{
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
    updateMe(req: {
        user: {
            sub: string;
        };
    }, dto: UpdateUserDto): Promise<{
        id: string;
        email: string;
        fullName: string;
        avatarUrl: string | null;
        department: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
