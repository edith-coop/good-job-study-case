import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";
import { ReactionEmoji } from "../../generated/prisma/enums";

export class CreateReactionDto {
  @ApiProperty({ enum: ReactionEmoji })
  @IsEnum(ReactionEmoji)
  emoji!: ReactionEmoji;
}
