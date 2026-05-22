import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { KudosModule } from './kudos/kudos.module';
import { LedgerModule } from './ledger/ledger.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';
import { RealtimeModule } from './realtime/realtime.module';
import { RewardsModule } from './rewards/rewards.module';
import { UploadsModule } from './uploads/uploads.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    KudosModule,
    RewardsModule,
    LedgerModule,
    NotificationsModule,
    UploadsModule,
    RedisModule,
    RealtimeModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
