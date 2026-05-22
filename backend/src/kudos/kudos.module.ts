import { forwardRef, Module } from '@nestjs/common';
import { NotificationsModule } from '../notifications/notifications.module';
import { PrismaModule } from '../prisma/prisma.module';
import { KudosFeedController } from './kudos-feed.controller';
import { KudosPeerRecognitionController } from './kudos-peer-recognition.controller';
import { KudosService } from './kudos.service';

@Module({
  imports: [forwardRef(() => PrismaModule), forwardRef(() => NotificationsModule)],
  controllers: [KudosPeerRecognitionController, KudosFeedController],
  providers: [KudosService],
  exports: [KudosService],
})
export class KudosModule {}
