import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { UsersModule } from './users/users.module';
import { PmModule } from './master/pm/pm.module';
import { EqTypeService } from './master/eq-type/eq-type.service';
import { EqTypeModule } from './master/eq-type/eq-type.module';
import { PositionService } from './master/position/position.service';
import { PositionModule } from './master/position/position.module';
import { FixedModule } from './master/fixed/fixed.module';
import { CauseModule } from './master/cause/cause.module';
import { ProblemModule } from './master/problem/problem.module';
import { EqPartsModule } from './master/eq-parts/eq-parts.module';
import { DepartmentModule } from './master/department/department.module';
import { ProblemTypeModule } from './master/problem-type/problem-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    NotesModule,
    UsersModule,
    PmModule,
    EqTypeModule,
    PositionModule,
    FixedModule,
    CauseModule,
    ProblemModule,
    EqPartsModule,
    DepartmentModule,
    ProblemTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService, EqTypeService, PositionService],
})
export class AppModule { }
