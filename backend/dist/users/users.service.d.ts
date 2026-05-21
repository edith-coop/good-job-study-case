import { PrismaService } from '../prisma/prisma.service';
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
    getProfile(id: string): Promise<{
        id: string;
        email: string;
        fullName: string;
        avatarUrl: string | null;
        department: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
