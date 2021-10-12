import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsString, IsEmail } from 'class-validator';
//import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";
import * as bcrypt from 'bcrypt';

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

@Entity()
export class Users extends BaseEntity {
  @PrimaryColumn()
  StudentID: string;

  @Column({ unique: true, length: 50 })
  @IsString()
  UserName: string;

  @Column({ length: 100 })
  @IsString()
  Password: string;


  @Column({ length: 100 })
  @IsString()
  Name: string;


  @Column({ length: 100 })
  @IsString()
  Faculty: string;

  @Column({ length: 100 })
  @IsString()
  Major: string;


  //@Column({ length: 1 })
  //@IsString()
  //Sex: string;

  @Column({ default: false })
  IsActive: boolean;

  @Column({ length: 100, nullable: true })
  @IsEmail()
  Email: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.User,
  })
  UserRole: UserRole;

  @Column({ nullable: true })
  ProfileImage: string;

  @Column({ length: 100 })
  @IsString()
  CreateBy: string;

  @CreateDateColumn()
  CreateTime: Date;

  @Column({ length: 100 })
  @IsString()
  UpdateBy: string;

  @UpdateDateColumn()
  UpdateTime: Date;

  @BeforeInsert()
  emailToLowerCase() {
    this.Email = this.Email.toLowerCase();
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.Password = await bcrypt.hash(this.Password, 10);
  }
}