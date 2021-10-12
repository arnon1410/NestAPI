import { Module } from '@nestjs/common';
import { EqPartsController } from './eq-parts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EqPartsService } from './eq-parts.service';
import { EqParts } from './eq-parts.entity';
@Module({
  imports: [TypeOrmModule.forFeature([EqParts])],
  controllers: [EqPartsController],
  providers: [EqPartsService],
})
export class EqPartsModule {}
