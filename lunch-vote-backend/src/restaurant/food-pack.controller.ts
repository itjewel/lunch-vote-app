import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { FoodPackService } from './food-pack.service';
import { CreateFoodPackDto } from './dto/food-pack.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('food-packs')
@Controller('food-packs')
export class FoodPackController {
  constructor(private readonly foodPackService: FoodPackService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Create a new food pack.' })
  create(@Body() createFoodPackDto: CreateFoodPackDto) {
    return this.foodPackService.create(createFoodPackDto);
  }

  @Get('restaurant/:id')
  @ApiResponse({ status: 200, description: 'List food packs by restaurant ID.' })
  getByRestaurant(@Param('id') id: string) {
    const restaurantId = parseInt(id, 10);  // Convert string to number
    return this.foodPackService.findAllByRestaurant(restaurantId);
  }
  
}
