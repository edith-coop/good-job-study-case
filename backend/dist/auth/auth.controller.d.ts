import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        user: {
            id: string;
            email: string;
            password: string;
            fullName: string;
            avatarUrl: string | null;
            department: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            password: string;
            fullName: string;
            avatarUrl: string | null;
            department: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
