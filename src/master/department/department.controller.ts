import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { DepartmentService } from './department.service';
  import { Departments } from './department.entity';

@Controller('department')
export class DepartmentController {    constructor(private readonly departmentService: DepartmentService) {}

@Get()
findAll() {
  return this.departmentService.findAll();
}

@Get(':id')
findOne(@Param('id') id: number) {
  return this.departmentService.findOne(id);
}

@Post()
create(@Body() user: Departments) {
  return this.departmentService.create(user);
}

@Patch(':id')
async editNote(@Body() user: Departments, @Param('id') id: number): Promise<Departments> {
  return await this.departmentService.update(id, user);
}

@Delete(':id')
remove(@Param('id') id: number) {
  this.departmentService.remove(id);
}
}
