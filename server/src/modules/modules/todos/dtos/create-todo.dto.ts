import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDTO {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  potencial_business: string;

  @IsNotEmpty()
  @IsString()
  reminder_date: string;
}
