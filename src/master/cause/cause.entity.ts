import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class Causes extends BaseEntity {
  @PrimaryGeneratedColumn()
  CauseID: number;

  @Column({ length: 100 })
  @IsString()
  CauseName: string;

  @Column({ default: true })
  IsActive: boolean;

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
