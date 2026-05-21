import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { CreateKudoDto } from './dtos/create-kudo.dto';
import { CreateReactionDto } from './dtos/create-reaction.dto';
import { ListKudosQuery } from './dtos/list-kudos.query';
import { KudosService } from './kudos.service';

@ApiTags('kudos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('kudos')
export class KudosController {
  constructor(private readonly kudosService: KudosService) {}

  @ApiOkResponse({ description: 'Create a new kudo' })
  @Post()
  create(@Req() req: { user: { sub: string } }, @Body() dto: CreateKudoDto) {
    return this.kudosService.create(req.user.sub, dto);
  }

  @ApiOkResponse({ description: 'List kudos feed' })
  @Get()
  list(@Query() query: ListKudosQuery) {
    return this.kudosService.list(query);
  }

  @ApiOkResponse({ description: 'Get kudo detail' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.kudosService.getById(id);
  }

  @ApiOkResponse({ description: 'Add comment to kudo' })
  @Post(':id/comments')
  addComment(
    @Req() req: { user: { sub: string } },
    @Param('id') id: string,
    @Body() dto: CreateCommentDto,
  ) {
    return this.kudosService.addComment(req.user.sub, id, dto);
  }

  @ApiOkResponse({ description: 'Add reaction to kudo' })
  @Post(':id/reactions')
  addReaction(
    @Req() req: { user: { sub: string } },
    @Param('id') id: string,
    @Body() dto: CreateReactionDto,
  ) {
    return this.kudosService.addReaction(req.user.sub, id, dto);
  }
}
