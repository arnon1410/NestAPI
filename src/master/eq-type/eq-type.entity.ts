import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class EqTypes extends BaseEntity {
  @PrimaryGeneratedColumn()
  EqTypeID: number;

  @Column({ length: 100 })
  @IsString()
  EqTypeName: string;

  @Column({ length: 100, nullable: true })
  @IsString()
  EqTypeNameEN: string;

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
