import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RedeemRewardDto {
  @ApiProperty()
  @IsString()
  rewardId!: string;
}
