import { IsNotEmpty, IsEmail } from 'class-validator';

export enum UserRole {

  Admin = 'Admin',
  User = 'User',
}

export class UserDto {
  @IsNotEmpty()
  StudentID: string;

  @IsNotEmpty()
  UserName: string;

  @IsNotEmpty()
  @IsEmail()
  Email: string;

  @IsNotEmpty()
  Password: string;

  UserRole: UserRole;
  
  //PrefixT: string;
  Name: string;

  Faculty: string;
  
  Major: string;

  CreatTime?: Date;
}
