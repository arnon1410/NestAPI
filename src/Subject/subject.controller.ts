import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { Subject } from './subject.entity';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  findAll() {
    return this.subjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.subjectService.findOne(id);
  }

  @Post()
  create(@Body() item: Subject) {
    return this.subjectService.create(item);
  }

  @Patch(':id')
  async editNote(@Body() item: Subject, @Param('id') id: number): Promise<Subject> {
    return await this.subjectService.update(id, item);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.subjectService.remove(id);
  }
}
