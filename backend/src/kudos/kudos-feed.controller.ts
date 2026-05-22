import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { CreateFeedPostDto } from './dtos/create-feed-post.dto';
import { CreateReactionDto } from './dtos/create-reaction.dto';
import { ListKudosQuery } from './dtos/list-kudos.query';
import { KudosService } from './kudos.service';

@ApiTags('Live Kudo Feed')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('kudos/feed')
export class KudosFeedController {
  constructor(private readonly kudosService: KudosService) {}

  @ApiOkResponse({ description: 'Create live feed post' })
  @Post()
  create(@Req() req: { user: { sub: string } }, @Body() dto: CreateFeedPostDto) {
    return this.kudosService.createFeed(req.user.sub, dto);
  }

  @ApiOkResponse({ description: 'List live kudos feed' })
  @Get()
  list(@Query() query: ListKudosQuery) {
    return this.kudosService.list(query);
  }

  @ApiOkResponse({ description: 'Get live feed kudo detail' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.kudosService.getById(id);
  }

  @ApiOkResponse({ description: 'Add comment to live feed kudo' })
  @Post(':id/comments')
  addComment(
    @Req() req: { user: { sub: string } },
    @Param('id') id: string,
    @Body() dto: CreateCommentDto,
  ) {
    return this.kudosService.addComment(req.user.sub, id, dto);
  }

  @ApiOkResponse({ description: 'Add reaction to live feed kudo' })
  @Post(':id/reactions')
  addReaction(
    @Req() req: { user: { sub: string } },
    @Param('id') id: string,
    @Body() dto: CreateReactionDto,
  ) {
    return this.kudosService.addReaction(req.user.sub, id, dto);
  }
}
