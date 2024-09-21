import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVoteDto {
  @ApiProperty({ example: 1 }) 
  @IsInt()
  restaurantId: number;

  @ApiProperty({ example: 1 }) 
  @IsInt()
  userId: number; 
}
