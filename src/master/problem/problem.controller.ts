import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { ProblemService } from './problem.service';
  import { Problems } from './problem.entity';
@Controller('problem')
export class ProblemController {
    constructor(private readonly problemsService: ProblemService) {}

    @Get()
    findAll() {
      return this.problemsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.problemsService.findOne(id);
    }
  
    @Post()
    create(@Body() user: Problems) {
      return this.problemsService.create(user);
    }
  
    @Patch(':id')
    async editNote(@Body() user: Problems, @Param('id') id: number): Promise<Problems> {
      return await this.problemsService.update(id, user);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.problemsService.remove(id);
    }
  }
