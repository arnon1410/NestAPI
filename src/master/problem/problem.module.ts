import { Module } from '@nestjs/common';
import { ProblemController } from './problem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemService } from './problem.service';
import { Problems } from './problem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Problems])],
  controllers: [ProblemController],
  providers: [ProblemService],
})
export class ProblemModule {}
