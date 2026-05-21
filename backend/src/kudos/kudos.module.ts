import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { KudosController } from './kudos.controller';
import { KudosService } from './kudos.service';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [
    forwardRef(()=>PrismaModule),
    forwardRef(()=>NotificationsModule)
  ],
  controllers: [KudosController],
  providers: [KudosService],
})
export class KudosModule {}
