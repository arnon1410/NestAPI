import { Module } from '@nestjs/common';
import { ProblemTypeController } from './problem-type.controller';
import { ProblemTypeService } from './problem-type.service';

@Module({
  controllers: [ProblemTypeController],
  providers: [ProblemTypeService],
})
export class ProblemTypeModule {}
