import { Controller, Get, Post, Body, Patch, Param, Delete,} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Groups } from './groups.entity';

@Controller('groups')

export class GroupsController {
    constructor(private readonly eqpartService: GroupsService) {}

    @Get()
    findAll() {
      return this.eqpartService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.eqpartService.findOne(id);
    }
  
    @Post()
    create(@Body() user: Groups) {
      return this.eqpartService.create(user);
    }
  
    @Patch(':id')
    async editNote(@Body() user: Groups, @Param('id') id: number): Promise<Groups> {
      return await this.eqpartService.update(id, user);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.eqpartService.remove(id);
    }
  }
