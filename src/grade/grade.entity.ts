import {
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { IsString, IsEmail } from 'class-validator';
import { Users } from 'src/users/users.entity';
  //import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";
  @Entity()
  export class Grade extends BaseEntity {
    @PrimaryColumn()
    GradeID: string;
  
    @Column({ unique: true, length: 50 })
    @IsString()
    Grade: string;
  
    @Column({ length: 50 })
    @IsString()
    Term: string;
  
  
    @Column({ length: 50 })
    @IsString()
    Year: string;
  
    @Column({ length: 100 })
    @IsString()
    CreateBy: string;

    @CreateDateColumn()
    CreateTime: Date;
  
    @Column({ length: 100 })
    @IsString()
    UpdateBy: string;

    @ManyToOne(() => Users, (users) => users.users, {
      onDelete: 'CASCADE',
      orphanedRowAction: 'delete',
    })
    @JoinColumn({
      name: 'StudentID',
      referencedColumnName: 'StudentID',
    })
    users: Users[];

  
  }
