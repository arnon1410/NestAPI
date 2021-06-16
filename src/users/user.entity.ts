import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsEmail } from 'class-validator';
//import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";

export enum UserRole {
  SystemAdmin = 'SystemAdmin',
  Admin = 'Admin',
  Technician = 'Technician',
  HeadOfTechnician = 'HeadOfTechnician',
  General = 'General',
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column({ length: 50 })
  @IsString()
  UserName: string;

  @Column({ length: 50 })
  @IsString()
  Password: string;

  @Column({ length: 10 })
  @IsString()
  PrefixT: string;

  @Column({ length: 100 })
  @IsString()
  FNameT: string;

  @Column({ length: 100 })
  @IsString()
  LNameT: string;

  @Column({ length: 10, nullable: true })
  PrefixE: string;

  @Column({ length: 100, nullable: true })
  @IsString()
  FNameE: string;

  @Column({ length: 100, nullable: true })
  @IsString()
  LNameE: string;

  @Column({ length: 1 })
  @IsString()
  Sex: string;

  @Column({ length: 100, nullable: true })
  IDCard: string;

  @Column({ default: false })
  IsActive: boolean;

  @Column({ length: 100, nullable: true })
  @IsEmail()
  Email: string;

  @Column({ length: 50, nullable: true })
  Mobile: string;

  @Column({ length: 50, nullable: true })
  LineID: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.General,
  })
  UserRole: UserRole;

  @Column({ length: 100 })
  @IsString()
  CreateBy: string;

  @Column()
  CreateTime: Date;

  @Column({ length: 100 })
  @IsString()
  UpdateBy: string;

  @Column()
  UpdateTime: Date;
}
