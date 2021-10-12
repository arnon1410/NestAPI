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
import {Response, Request} from 'express';
import {JwtService} from "@nestjs/jwt";
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { Observable, of } from 'rxjs';

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
  async edit(@Body() user: Users, @Param('id') id: number): Promise<Users> {
    return await this.usersService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.usersService.remove(id);
  }

  @Post('logout')
  async logout(@Res({passthrough: true}) response: Response) {
      response.clearCookie('jwt');

      return {
          message: 'success'
      }
  }
  
}
