import { Module } from '@nestjs/common';
import { GroupsubService } from './groupsub.service';
import { GroupsubController } from './groupsub.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Groupsub } from './groupsub.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Groupsub])],
  controllers: [GroupsubController],
  providers: [GroupsubService],
})
export class GroupsubModule {}
