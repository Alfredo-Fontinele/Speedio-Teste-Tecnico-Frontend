import {
  Body,
  Controller,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Constants } from 'src/constants';
import { PrismaService } from '../../database/prisma.service';
import { CreateTodoDTO } from './dtos/create-todo.dto';
import { FindAllTodosDTO } from './dtos/find-all-todos.dto';
import { UpdateTodoDTO } from './dtos/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(
    private databaseService: PrismaService,
    private jwtService: JwtService,
  ) {}

  @Post()
  async createMany(@Body() payload: CreateTodoDTO[]) {
    const alreadyExistToken = await this.databaseService.auth.findMany();

    if (alreadyExistToken.length) {
      const tokenFound = alreadyExistToken[0].token;
      const accessToken = await this.databaseService.auth.update({
        where: {
          token: tokenFound,
        },
        data: {
          token: await this.jwtService.signAsync(
            { sub: 'todos' },
            { secret: Constants.SECRET_KEY },
          ),
        },
      });

      await this.databaseService.todo.deleteMany();

      const todos = await this.databaseService.todo.createMany({
        data: payload,
      });

      return {
        access_token: accessToken,
        todos,
      };
    }

    const accessToken = await this.databaseService.auth.create({
      data: {
        token: await this.jwtService.signAsync(
          { sub: 'todos' },
          { secret: Constants.SECRET_KEY },
        ),
      },
    });

    const todos = await this.databaseService.todo.createMany({
      data: payload,
    });

    return {
      access_token: accessToken,
      todos,
    };
  }

  @Post('/get-all')
  async findAll(@Body() payload: FindAllTodosDTO) {
    const existToken = await this.databaseService.auth.findFirst({
      where: {
        token: payload.access_token,
      },
    });

    if (!existToken) {
      throw new NotFoundException('invalid token');
    }

    return await this.databaseService.todo.findMany();
  }

  @Patch()
  async edit(@Body() payload: UpdateTodoDTO, @Param('id') id: string) {
    return await this.databaseService.todo.update({
      where: {
        id,
      },
      data: payload,
    });
  }
}
