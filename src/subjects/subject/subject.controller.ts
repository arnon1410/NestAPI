import { Controller, Get, Post, Body, Patch, Param, Delete,} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { Subject } from './subject.entity';

@Controller('subject')

export class SubjectController {
    constructor(private readonly eqpartService: SubjectService) {}

    @Get()
    findAll() {
      return this.eqpartService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.eqpartService.findOne(id);
    }
  
    @Post()
    create(@Body() user: Subject) {
      return this.eqpartService.create(user);
    }
  
    @Patch(':id')
    async editNote(@Body() user: Subject, @Param('id') id: number): Promise<Subject> {
      return await this.eqpartService.update(id, user);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.eqpartService.remove(id);
    }
  }
