import { Module } from '@nestjs/common';
import { PrismaService } from 'src/modules/database/prisma.service';
import { TodosController } from './todos.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [TodosController],
  providers: [PrismaService, JwtService],
})
export class TodosModule {}
