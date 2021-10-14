import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsString } from 'class-validator';
import { Subject } from 'src/Subject/subject.entity';

@Entity()
export class Groupsub extends BaseEntity {
  @PrimaryGeneratedColumn()
  SubjectID: number;

  @Column({ length: 100 })
  @IsString()
  NameGroup: string;

  @Column({ length: 100 })
  @IsString()
  TotalCredit: string;

  @OneToMany(() => Subject, (subject) => subject.groupsub, {
    cascade: true,
  })

  subject: Subject[];
}
