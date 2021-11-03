import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Res,
  } from '@nestjs/common';
  import { GradeService } from './grade.service';
  import { Grade } from './grade.entity';

  @Controller('grade')
  export class GradeController {
    constructor(private readonly gradeService: GradeService) {}
  
    @Get()
    findAll() {
      return this.gradeService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.gradeService.findOne(id);
    }
  
    @Post()
    create(@Body() user: Grade) {
      return this.gradeService.create(user);
    }
  
    @Patch(':id')
    async editGrade(
      @Body() grade: Grade,
      @Param('id') id: number,
    ): Promise<Grade> {
      return await this.gradeService.update(id, grade);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.gradeService.remove(id);
    }
  }