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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findById(id) {
        return this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                fullName: true,
                avatarUrl: true,
                department: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    async listUsers() {
        return this.prisma.user.findMany({
            select: {
                id: true,
                email: true,
                fullName: true,
                avatarUrl: true,
                department: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    getCurrentMonth() {
        return new Date().toISOString().slice(0, 7);
    }
    async getCurrentGivingBudget(userId) {
        const month = this.getCurrentMonth();
        const budget = await this.prisma.monthlyGivingBudget.findUnique({
            where: {
                userId_month: {
                    userId,
                    month,
                },
            },
        });
        if (!budget) {
            return {
                month,
                totalBudget: 200,
                usedBudget: 0,
                remainingBudget: 200,
                resetAt: null,
            };
        }
        return budget;
    }
    async getPointBalance(userId) {
        const agg = await this.prisma.pointLedger.aggregate({
            where: { userId },
            _sum: { amount: true },
        });
        return agg._sum.amount ?? 0;
    }
    async getProfile(id) {
        const [user, currentGivingBudget, pointBalance] = await Promise.all([
            this.findById(id),
            this.getCurrentGivingBudget(id),
            this.getPointBalance(id),
        ]);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return {
            ...user,
            currentGivingBudget,
            pointBalance,
        };
    }
    async updateProfile(userId, dto) {
        const existingUser = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!existingUser) {
            throw new common_1.NotFoundException('User not found');
        }
        const updatedUser = await this.prisma.user.update({
            where: { id: userId },
            data: {
                fullName: dto.fullName,
                avatarUrl: dto.avatarUrl,
                department: dto.department,
            },
            select: {
                id: true,
                email: true,
                fullName: true,
                avatarUrl: true,
                department: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return updatedUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map