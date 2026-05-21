import { Body, Controller, Delete, Get, Param, Patch, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { ListNotificationsQuery } from './dtos/list-notifications.query';
import { MarkReadDto } from './dtos/mark-read.dto';
import { NotificationsService } from './notifications.service';

@ApiTags('notifications')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @ApiOkResponse({ description: 'List notifications' })
  @Get()
  list(@CurrentUser('sub') userId: string, @Query() query: ListNotificationsQuery) {
    return this.notificationsService.list(userId, query);
  }

  @ApiOkResponse({ description: 'Unread notifications count' })
  @Get('unread-count')
  unreadCount(@CurrentUser('sub') userId: string) {
    return this.notificationsService.unreadCount(userId);
  }

  @ApiOkResponse({ description: 'Mark all notifications as read' })
  @Patch('mark-all-read')
  markAllAsRead(@CurrentUser('sub') userId: string) {
    return this.notificationsService.markAllAsRead(userId);
  }

  @ApiOkResponse({ description: 'Mark selected notifications as read' })
  @Patch('mark-read')
  markSelectedAsRead(@CurrentUser('sub') userId: string, @Body() dto: MarkReadDto) {
    return this.notificationsService.markSelectedAsRead(userId, dto.ids);
  }

  @ApiOkResponse({ description: 'Delete notification' })
  @Delete(':id')
  deleteNotification(@CurrentUser('sub') userId: string, @Param('id') id: string) {
    return this.notificationsService.deleteNotification(userId, id);
  }
}
