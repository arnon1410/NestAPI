import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class Categorys extends BaseEntity {
  @PrimaryGeneratedColumn()
  SubjectID: number;

  @Column({ length: 50 })
  @IsString()
  SubjectName: string;

  @Column({ length: 50 })
  @IsString()
  DetailSJ: string;

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
