import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.adminService.findOne(id);
  }

  @Post()
  create(@Body() user: Admin) {
    return this.adminService.create(user);
  }

  @Patch(':id')
  async editNote(@Body() user: Admin, @Param('id') id: number): Promise<Admin> {
    return await this.adminService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.adminService.remove(id);
  }
}
