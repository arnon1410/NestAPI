import { Module } from '@nestjs/common';
import { EqTypeController } from './eq-type.controller';
import { EqTypeService } from './eq-type.service';

@Module({
  controllers: [EqTypeController],
  providers: [EqTypeService],
})
export class EqTypeModule {}
