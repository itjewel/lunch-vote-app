import { IsString } from 'class-validator';  // Validate input data
import { ApiProperty } from '@nestjs/swagger';

export class CreateRestaurantDto {
  @ApiProperty({ example: 'Best Bites' })  // Swagger example value
  @IsString()
  name: string;  // The name of the restaurant
}
