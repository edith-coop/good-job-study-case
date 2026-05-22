import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateKudoDto } from './dtos/create-kudo.dto';
import { ListKudosQuery } from './dtos/list-kudos.query';
import { KudosService } from './kudos.service';

@ApiTags('Peer Recognition')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('kudos')
export class KudosPeerRecognitionController {
  constructor(private readonly kudosService: KudosService) {}

  @ApiOkResponse({ description: 'Create a new peer recognition kudo' })
  @Post()
  create(@Req() req: { user: { sub: string } }, @Body() dto: CreateKudoDto) {
    return this.kudosService.create(req.user.sub, dto);
  } 

  @ApiOkResponse({ description: 'List kudos sent by current user' })
  @Get('peer-recognition/sent')
  listSent(@Req() req: { user: { sub: string } }, @Query() query: ListKudosQuery) {
    return this.kudosService.listSent(req.user.sub, query);
  }

  @ApiOkResponse({ description: 'List kudos received by current user' })
  @Get('peer-recognition/received')
  listReceived(@Req() req: { user: { sub: string } }, @Query() query: ListKudosQuery) {
    return this.kudosService.listReceived(req.user.sub, query);
  }
}
