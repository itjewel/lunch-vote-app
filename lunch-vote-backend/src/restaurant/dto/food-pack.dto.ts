import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFoodPackDto {
  @ApiProperty({ example: 'Pizza' })
  @IsString()
  name: string;

  @ApiProperty()
  restaurantId: number; // Assuming the food pack is linked to a specific restaurant
}
