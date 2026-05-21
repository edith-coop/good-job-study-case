import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { CreateRewardDto } from './dtos/create-reward.dto';
import { RedeemRewardDto } from './dtos/redeem-reward.dto';
import { UpdateRedemptionStatusDto } from './dtos/update-redemption-status.dto';
import { RewardsService } from './rewards.service';

@ApiTags('rewards')
@Controller('rewards')
export class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}

  @ApiOkResponse({ description: 'Create reward catalog item' })
  @Post()
  create(@Body() dto: CreateRewardDto) {
    return this.rewardsService.create(dto);
  }

  @ApiOkResponse({ description: 'List reward catalog items' })
  @Get()
  findAll() {
    return this.rewardsService.findAll();
  }

  @ApiOkResponse({ description: 'Get reward by id' })
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.rewardsService.findById(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Redeem reward' })
  @Post('redeem')
  redeem(@CurrentUser('sub') userId: string, @Body() dto: RedeemRewardDto) {
    return this.rewardsService.redeem(userId, dto.rewardId);
  }

  @ApiOkResponse({ description: 'List redemptions' })
  @Get('redemptions/all')
  listRedemptions() {
    return this.rewardsService.listRedemptions();
  }

  @ApiOkResponse({ description: 'Get redemption by id' })
  @Get('redemptions/:id')
  getRedemptionById(@Param('id') id: string) {
    return this.rewardsService.getRedemptionById(id);
  }

  @ApiOkResponse({ description: 'Update redemption status' })
  @Patch('redemptions/:id/status')
  updateRedemptionStatus(@Param('id') id: string, @Body() dto: UpdateRedemptionStatusDto) {
    return this.rewardsService.updateRedemptionStatus(id, dto.status);
  }
}
