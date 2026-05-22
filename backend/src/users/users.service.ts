import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
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

  private getCurrentMonth() {
    return new Date().toISOString().slice(0, 7);
  }

  async getCurrentGivingBudget(userId: string) {
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

  async getPointBalance(userId: string) {
    const agg = await this.prisma.pointLedger.aggregate({
      where: { userId },
      _sum: { amount: true },
    });

    return agg._sum.amount ?? 0;
  }

  async getProfile(id: string) {
    const [user, currentGivingBudget, pointBalance] = await Promise.all([
      this.findById(id),
      this.getCurrentGivingBudget(id),
      this.getPointBalance(id),
    ]);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      ...user,
      currentGivingBudget,
      pointBalance,
    };
  }

  async updateProfile(userId: string, dto: UpdateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      throw new NotFoundException('User not found');
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
}
