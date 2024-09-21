import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateVoteDto } from './dto/vote.dto';

@Injectable()
export class VoteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createVoteDto: CreateVoteDto) {
    return this.prisma.vote.create({
      data: {
        restaurantId: createVoteDto.restaurantId,
        userId: createVoteDto.userId, 
      },
    });
  }

  async getDailyWinner() {
    return this.prisma.vote.groupBy({
      by: ['restaurantId'],
      _count: {
        restaurantId: true,
      },
      orderBy: {
        _count: {
          restaurantId: 'desc',
        },
      },
      take: 1,
    });
  }
}
