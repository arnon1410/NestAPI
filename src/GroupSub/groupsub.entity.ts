import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsString } from 'class-validator';
import { Subject } from 'src/Subject/subject.entity';


@Entity()
export class Groupsub extends BaseEntity {

  @PrimaryGeneratedColumn()
  GroupID: number;

  @Column({ length: 100 })
  @IsString()
  NameGroup: string;

  @Column({ length: 100 })
  @IsString()
  TotalCredit: string;

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

  @OneToMany(() => Subject, (subject) => subject.groupsub, {
    cascade: true,
    eager: true,
  })

  subject: Subject[];
}
