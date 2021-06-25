import { Module } from '@nestjs/common';
import { EqPartsController } from './eq-parts.controller';
import { EqPartsService } from './eq-parts.service';

@Module({
  controllers: [EqPartsController],
  providers: [EqPartsService],
})
export class EqPartsModule {}
