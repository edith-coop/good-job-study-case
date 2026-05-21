import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    me(req: {
        user: {
            sub: string;
        };
    }): Promise<{
        id: string;
        email: string;
        fullName: string;
        avatarUrl: string | null;
        department: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
