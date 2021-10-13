import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  StudenttermID: number;

  @Column({ length: 100 })
  @IsString()
  Year: string;
}
