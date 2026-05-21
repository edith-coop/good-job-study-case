import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MediaType } from "../../generated/prisma/enums";

class CommentMediaDto {
  @ApiProperty({ enum: MediaType })
  @IsEnum(MediaType)
  mediaType!: MediaType;

  @ApiProperty()
  @IsString()
  mediaUrl!: string;
}

export class CreateCommentDto {
  @ApiProperty()
  @IsString()
  content!: string;

  @ApiPropertyOptional({ type: [CommentMediaDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CommentMediaDto)
  media?: CommentMediaDto[];
}
