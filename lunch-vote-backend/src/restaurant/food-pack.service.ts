import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
// import { CreateFoodPackDto } from 'dto/food-pack.dto';
import { CreateFoodPackDto } from './dto/food-pack.dto';

@Injectable()
export class FoodPackService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFoodPackDto: CreateFoodPackDto) {
    return this.prisma.foodPack.create({
      data: {
        name: createFoodPackDto.name,
        restaurantId: createFoodPackDto.restaurantId,
      },
    });
  }

  async findAllByRestaurant(restaurantId: number) {
    try {
      return await this.prisma.foodPack.findMany({
        where: { restaurantId },
      });
    } catch (error) {
      console.error('Error fetching food packs:', error);  // Logs the actual error in the console
      throw new Error('Error fetching food packs');
    }
  }
  
}
