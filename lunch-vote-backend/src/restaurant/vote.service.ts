import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateVoteDto } from './dto/vote.dto';

@Injectable()
export class VoteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createVoteDto: CreateVoteDto) {
    const restaurantExists = await this.prisma.restaurant.findUnique({
      where: { id: createVoteDto.restaurantId },
    });
  
    if (!restaurantExists) {
      throw new Error(`Restaurant with ID ${createVoteDto.restaurantId} does not exist.`);
    }
  
    return this.prisma.vote.create({
      data: {
        restaurantId: createVoteDto.restaurantId,
        foodPackId: createVoteDto.foodPackId,
      },
    });
  }
  
  async getDailyWinner() {
    const votes = await this.prisma.vote.findMany({
      select: {
        restaurantId: true,
        foodPackId: true,
      },
    });
  
    // Perform the aggregation manually
    const voteCounts = votes.reduce((acc, vote) => {
      const key = `${vote.restaurantId}-${vote.foodPackId}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
  
    const topVote = Object.entries(voteCounts).sort((a, b) => (b[1] as number) - (a[1] as number))[0];

  
    if (topVote) {
      const [restaurantId, foodPackId] = topVote[0].split('-').map(Number);
  
      const restaurant = await this.prisma.restaurant.findUnique({
        where: { id: restaurantId },
        select: { name: true },
      });
  
      const foodPack = await this.prisma.foodPack.findUnique({
        where: { id: foodPackId },
        select: { name: true },
      });
  
      return {
        restaurantName: restaurant?.name,
        foodPackName: foodPack?.name || 'No food pack',
      };
    }
  
    return null;
  }
  
  



}
