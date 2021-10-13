import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroupsubService } from './groupsub.service';
import { Groupsub } from './groupsub.entity';

@Controller('groupsub')
export class GroupsubController {
  constructor(private readonly groupsubService: GroupsubService) {}

  @Get()
  findAll() {
    return this.groupsubService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.groupsubService.findOne(id);
  }

  @Post()
  create(@Body() user: Groupsub) {
    return this.groupsubService.create(user);
  }

  @Patch(':id')
  async editNote(
    @Body() user: Groupsub,
    @Param('id') id: number,
  ): Promise<Groupsub> {
    return await this.groupsubService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.groupsubService.remove(id);
  }
}
