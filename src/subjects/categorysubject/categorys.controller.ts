import { Controller, Get, Post, Body, Patch, Param, Delete,} from '@nestjs/common';
import { CategoryService } from './categorys.service';
import { Categorys } from './categorys.entity';

@Controller('categorys')
export class CategorysController {
    constructor(private readonly eqpartService: CategoryService) {}

    @Get()
    findAll() {
      return this.eqpartService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.eqpartService.findOne(id);
    }
  
    @Post()
    create(@Body() user: Categorys) {
      return this.eqpartService.create(user);
    }
  
    @Patch(':id')
    async editNote(@Body() user: Categorys, @Param('id') id: number): Promise<Categorys> {
      return await this.eqpartService.update(id, user);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.eqpartService.remove(id);
    }
  }
