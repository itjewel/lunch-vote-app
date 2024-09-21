import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect(); // Connect to the database
  }

  async onModuleDestroy() {
    await this.$disconnect(); // Disconnect from the database when the app shuts down
  }
}
