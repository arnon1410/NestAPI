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
  import { ActivityService } from './activity.service';
  import { Activity } from './activity.entity';

@Controller('activity')
export class ActivityController {
    constructor(private readonly activityService: ActivityService) {}
    @Get()
    findAll() {
      return this.activityService.findAll();
    }
    @Get('ByUserID/:id')
    findByUserID(@Param('id') UserID: number) {
      return this.activityService.findByUserID(UserID);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.activityService.findOne(id);
    }
  
    @Post()
    create(@Body() user: Activity) {
      return this.activityService.create(user);
    }
  
    @Patch(':id')
    async editGrade(
      @Body() activity: Activity,
      @Param('id') id: number,
    ): Promise<Activity> {
      return await this.activityService.update(id, activity);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.activityService.remove(id);
    }
  }