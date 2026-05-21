import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  private signToken(user: { id: string; email: string; fullName: string }) {
    return this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
      fullName: user.fullName,
    });
  }

  async register(dto: RegisterDto) {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });
  
      if (existingUser) {
        throw new ConflictException('Email already exists');
      }
  
      const hashedPassword = await bcrypt.hash(dto.password, 10);
  
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hashedPassword,
          fullName: dto.fullName,
        },
      });
  
      return {
        // accessToken: await this.signToken(user),
        user,
      };
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async login(dto: LoginDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });
  
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
  
      const isPasswordValid = await bcrypt.compare(dto.password, user.password);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid credentials');
      }
  
      return {
        accessToken: await this.signToken(user),
        user,
      };
    } catch (error) {
      throw new UnauthorizedException(error);
    }
    
  }
}
