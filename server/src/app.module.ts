import { Module } from '@nestjs/common';
import { TodosModule } from './modules/modules/todos/todos.module';

@Module({
  imports: [TodosModule],
})
export class AppModule {}
