import { IsNotEmpty, IsString } from 'class-validator';

export class FindAllTodosDTO {
  @IsString()
  @IsNotEmpty()
  access_token: string;
}
