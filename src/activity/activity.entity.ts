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
export class ActivityEntity {}


@Entity()
  export class Activity extends BaseEntity {
    @PrimaryGeneratedColumn()
    ActivityID: number;
  
    @Column({ length: 100 })
    ActivityName: string;
  
    @Column()
    ActivityType: string;
  
    @Column()
    ActivityCount: number;
  
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

  }
