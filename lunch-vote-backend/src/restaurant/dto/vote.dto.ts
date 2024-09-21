import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVoteDto {
  @ApiProperty({ example: 1 }) // Example restaurant ID
  @IsInt()
  restaurantId: number;

  @ApiProperty({ example: 1 }) // Example user ID
  @IsInt()
  userId: number; // This should be included
}
