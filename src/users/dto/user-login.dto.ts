import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  readonly UserName: string;

  @IsNotEmpty()
  readonly Password: string;
}
