import { Groupsub } from './../GroupSub/groupsub.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsString } from 'class-validator';
import { Grade } from 'src/Grade/grade.entity';

@Entity()
export class Subject extends BaseEntity {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  SubjectID: number;

  @Column({ length: 100 })
  @IsString()
  SubjectNameTH: string;

  @Column({ length: 100 })
  @IsString()
  SubjectNameEN: string;

  @Column({ length: 100 })
  @IsString()
  Credit: string;

  @OneToMany(() => Grade, (grade) => grade.subject, {
    cascade: true,
  })
  grade: Grade;

  @ManyToOne(() => Groupsub, (groupsub) => groupsub.subject, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn({
    name: 'SubjectID',
    referencedColumnName: 'SubjectID',
    /* name: 'name_group',
    joinColumn: {
      name: 'SubjectID',
      referencedColumnName: 'SubjectID',
    },
    inverseJoinColumn: {
      name: 'SubjectID',
      referencedColumnName: 'SubjectID',
    }, */
  })
  groupsub: Groupsub[];
}

