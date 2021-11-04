import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { GradeModule } from './grade/grade.module';
import { GroupsubModule } from './GroupSub/groupsub.module';
import { SubjectModule } from './Subject/subject.module'; 
import { CourseModule } from './course/course.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    GradeModule,
    GroupsubModule,

    SubjectModule,
    CourseModule,
    ActivityModule
    
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
