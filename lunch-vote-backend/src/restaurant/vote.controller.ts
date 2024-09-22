import { Controller, Post, Body, Get } from '@nestjs/common';
import { VoteService } from './vote.service';
import { CreateVoteDto } from './dto/vote.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('votes')
@Controller('votes')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Create a new vote.' })
  create(@Body() createVoteDto: CreateVoteDto) {
    return this.voteService.create(createVoteDto);
  }

  @Get('winner')
  @ApiResponse({ status: 200, description: 'Get the daily winner based on votes.' })
  getWinner() {
    return this.voteService.getDailyWinner();
  }
}
