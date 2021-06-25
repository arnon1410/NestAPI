import { Module } from '@nestjs/common';
import { CauseController } from './cause.controller';
import { CauseService } from './cause.service';

@Module({
  controllers: [CauseController],
  providers: [CauseService],
})
export class CauseModule {}
