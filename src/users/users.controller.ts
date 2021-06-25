import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: Users) {
    return this.usersService.create(user);
  }

  @Patch(':id')
  async editNote(@Body() user: Users, @Param('id') id: number): Promise<Users> {
    return await this.usersService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.usersService.remove(id);
  }
}
