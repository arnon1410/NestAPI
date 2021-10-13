import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsEmail } from 'class-validator';

@Entity()
export class Admin extends BaseEntity {
  @PrimaryGeneratedColumn()
  AdminID: number;

  @Column({ length: 100 })
  @IsString()
  FName: string;

  @Column({ length: 100 })
  @IsString()
  LName: string;

  @Column({ length: 100, nullable: true })
  @IsEmail()
  Email: string;

  @Column({ length: 100 })
  @IsString()
  Password: string;

  @Column({ length: 100 })
  @IsString()
  Phonenumber: string;
}
