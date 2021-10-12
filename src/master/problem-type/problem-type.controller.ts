import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { ProblemTypeService } from './problem-type.service';
  import { ProblemTypes } from './problem-type.entity';

@Controller('problem-type')
export class ProblemTypeController {
    constructor(private readonly problemtypeService: ProblemTypeService) {}

    @Get()
    findAll() {
      return this.problemtypeService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.problemtypeService.findOne(id);
    }
    
    @Post()
    create(@Body() user: ProblemTypes) {
      return this.problemtypeService.create(user);
    }
    
    @Patch(':id')
    async editNote(@Body() user: ProblemTypes, @Param('id') id: number): Promise<ProblemTypes> {
      return await this.problemtypeService.update(id, user);
    }
    
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.problemtypeService.remove(id);
    }
    }
    
