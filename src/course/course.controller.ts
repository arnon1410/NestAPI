import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './course.entity';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.courseService.findOne(id);
  }

  @Post()
  create(@Body() user: Course) {
    return this.courseService.create(user);
  }

  @Patch(':id')
  async editNote(
    @Body() user: Course,
    @Param('id') id: number,
  ): Promise<Course> {
    return await this.courseService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.courseService.remove(id);
  }
}
