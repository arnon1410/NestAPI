import { Module } from '@nestjs/common';
import { CategorysController } from './categorys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './categorys.service';
import { Categorys } from './categorys.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categorys])],
  providers: [CategorysController],
  controllers: [CategoryService]
})
export class CategorysModule {}
