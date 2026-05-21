import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer"
import { IsInt, IsOptional, Min } from "class-validator"

export class ListNotificationsQuery {
  @ApiPropertyOptional({ default: 1 })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({ default: 20 })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number = 20;
}
