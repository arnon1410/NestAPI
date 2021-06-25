import { Module } from '@nestjs/common';
import { FixedController } from './fixed.controller';
import { FixedService } from './fixed.service';

@Module({
  controllers: [FixedController],
  providers: [FixedService],
})
export class FixedModule {}
