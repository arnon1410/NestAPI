import { Module } from '@nestjs/common';
import { ProblemTypeController } from './problem-type.controller';
import { ProblemTypeService } from './problem-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemTypes } from './problem-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProblemTypes])],
  controllers: [ProblemTypeController],
  providers: [ProblemTypeService],
})
export class ProblemTypeModule {}
