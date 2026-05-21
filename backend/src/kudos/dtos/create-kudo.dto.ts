import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MediaType, Visibility } from '../../generated/prisma/enums';

class KudoMediaDto {
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

export class CreateKudoDto {
  @ApiProperty()
  @IsString()
  receiverId!: string;

  @ApiProperty({ example: 20, minimum: 10, maximum: 50 })
  @IsInt()
  @Min(10)
  @Max(50)
  points!: number;

  @ApiProperty()
  @IsString()
  coreValue!: string;

  @ApiProperty()
  @IsString()
  message!: string;

  @ApiPropertyOptional({ enum: Visibility, default: Visibility.PUBLIC })
  @IsOptional()
  @IsEnum(Visibility)
  visibility?: Visibility;

  @ApiPropertyOptional({ type: [KudoMediaDto] })
  @IsOptional()
  @IsArray()
  @ArrayMinSize(0)
  @ValidateNested({ each: true })
  @Type(() => KudoMediaDto)
  media?: KudoMediaDto[];
}
