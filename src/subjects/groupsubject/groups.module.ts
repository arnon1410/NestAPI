import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsService } from './groups.service';
import { Groups } from './groups.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Groups])],
  providers: [GroupsService],
  controllers: [GroupsController]
})
export class GroupsModule {}
