import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MediaType, Visibility } from '../../generated/prisma/enums';

class FeedMediaDto {
  @ApiProperty({ enum: MediaType })
  @IsEnum(MediaType)
  mediaType!: MediaType;

  @ApiProperty()
  @IsString()
  mediaUrl!: string;

  @ApiPropertyOptional({ example: 120 })
  @IsOptional()
  @IsInt()
  @Min(0)
  durationSeconds?: number;
}

export class CreateFeedPostDto {
  @ApiProperty()
  @IsString()
  message!: string;

  @ApiProperty()
  @IsString()
  visibility?: Visibility;

  @ApiProperty()
  @IsString()
  coreValue?: string;

  @ApiPropertyOptional({ type: [FeedMediaDto] })
  @IsOptional()
  @IsArray()
  @ArrayMinSize(0)
  @ValidateNested({ each: true })
  @Type(() => FeedMediaDto)
  media?: FeedMediaDto[];

  @ApiPropertyOptional({ type: [String], example: ['user-id-1', 'user-id-2'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  taggedUserIds?: string[];
}
