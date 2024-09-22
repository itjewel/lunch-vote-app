import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { FoodPackController } from './food-pack.controller';
import { FoodPackService } from './food-pack.service';
import { VoteController } from './vote.controller';
import { VoteService } from './vote.service';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [RestaurantController, FoodPackController, VoteController],
  providers: [RestaurantService, FoodPackService, VoteService, PrismaService],
})
export class RestaurantModule {}
