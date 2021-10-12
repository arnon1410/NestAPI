import { Controller, Get, Post, Body, Patch, Param, Delete,} from '@nestjs/common';
import { EqPartsService } from './eq-parts.service';
import { EqParts } from './eq-parts.entity';

@Controller('eq-parts')
export class EqPartsController {
    constructor(private readonly eqpartService: EqPartsService) {}

    @Get()
    findAll() {
      return this.eqpartService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.eqpartService.findOne(id);
    }
  
    @Post()
    create(@Body() user: EqParts) {
      return this.eqpartService.create(user);
    }
  
    @Patch(':id')
    async editNote(@Body() user: EqParts, @Param('id') id: number): Promise<EqParts> {
      return await this.eqpartService.update(id, user);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.eqpartService.remove(id);
    }
  }
