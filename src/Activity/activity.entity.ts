import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class Activity extends BaseEntity {
  @PrimaryGeneratedColumn()
  StudentID: number;

  @Column({ length: 100 })
  @IsString()
  SubjectID: string;

  @Column({ length: 100 })
  @IsString()
  CountAC: string;

  @Column({ length: 100 })
  @IsString()
  GroupAC: string;
}
