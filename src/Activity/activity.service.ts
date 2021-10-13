import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async findAll(): Promise<Activity[]> {
    return await this.activityRepository.find();
  }

  findOne(id: number): Promise<Activity> {
    return this.activityRepository.findOne(id);
  }

  async create(user: Activity) {
    //user.CreateTime = user.UpdateTime = new Date(Date.now());
    this.activityRepository.save(user);
  }

  async update(id: number, user: Activity): Promise<Activity> {
    const editedUser = await this.activityRepository.findOne(id);
    if (!editedUser) {
      throw new NotFoundException('User is not found');
    }
    /*editedUser.PrefixT = user.;
    editedUser.UpdateTime = new Date(Date.now());*/

    await editedUser.save();
    return editedUser;
  }

  async remove(id: number): Promise<void> {
    await this.activityRepository.delete(id);
  }
}
