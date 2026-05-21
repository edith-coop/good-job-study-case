import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";
import { RedemptionStatus } from "../../generated/prisma/enums";

export class UpdateRedemptionStatusDto {
  @ApiProperty({ enum: RedemptionStatus })
  @IsEnum(RedemptionStatus)
  status!: RedemptionStatus;
}
