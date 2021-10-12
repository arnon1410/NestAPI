import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  UserName: string;

  @IsNotEmpty()
  Password: string;

  @IsNotEmpty()
  @IsEmail()
  Email: string;
}
