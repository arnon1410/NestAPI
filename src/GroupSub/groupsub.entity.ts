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

export enum NameGroup {
  Ax1 = 'กลุ่มสาระอยู่ดีมีสุข',
  Ax2 = 'กลุ่มสาระศาสตร์แห่งผู้ประกอบการ',
  Ax3 = 'กลุ่มสาระพลเมืองไทยและพลเมืองโลก',
  Ax4 = 'กลุ่มสาระภาษากับการสื่อสาร',
  Ax5 = 'กลุ่มสาระสุนทรียศาสตร์',
}
@Entity()
export class Groupsub extends BaseEntity {



  @PrimaryGeneratedColumn()
  SubjectID: number;

  @Column({
    type: 'enum',
    enum: NameGroup,
    default: NameGroup.Ax1,
  })
  NameGroup: NameGroup;

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
  })

  subject: Subject[];
}
