import { Controller, Get, Post, Body } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('restaurants')
@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'List of restaurants.' })
  getAllRestaurants() {
    return this.restaurantService.findAll();
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Create a new restaurant.' })
  createRestaurant(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.create(createRestaurantDto);
  }
}
