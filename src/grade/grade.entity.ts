import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
import { IsString } from 'class-validator';
import { Users } from 'src/users/users.entity';
import { Subject } from 'src/Subject/subject.entity';

@Entity()
  export class Grade extends BaseEntity {
    @PrimaryGeneratedColumn()
    GradeID: number;
  
    @Column({ length: 100 })
    Grade: string;
  
    @Column()
    Term: number;
  
    @Column()
    Year: number;
  
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

    @ManyToOne(() => Users, (users) => users.grade, {
      onDelete: 'CASCADE',
      orphanedRowAction: 'delete',
    })
    @JoinColumn({
      name: 'StudentID',
      referencedColumnName: 'StudentID',
    })
    users: Users[];

    @ManyToOne(() => Subject, (subject) => subject.grade, {
      onDelete: 'CASCADE',
      orphanedRowAction: 'delete',
    })
    @JoinColumn({
      name: 'SubjectID',
      referencedColumnName: 'SubjectID',
    })
    subject: Subject[];
  }
