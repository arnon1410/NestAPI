import { Module } from '@nestjs/common';
import { GradeService } from './grade.service';
import { GradeController } from './grade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade } from './grade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grade])],
  providers: [GradeService],
  controllers: [GradeController]
})
export class GradeModule {}
