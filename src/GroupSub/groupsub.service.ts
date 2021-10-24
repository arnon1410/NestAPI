import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Groupsub } from './groupsub.entity';

@Injectable()
export class GroupsubService {
  constructor(
    @InjectRepository(Groupsub)
    private groupsubRepository: Repository<Groupsub>,
  ) {}

  async findAll(): Promise<Groupsub[]> {
    return await this.groupsubRepository.find();
  }

  findOne(id: number): Promise<Groupsub> {
    return this.groupsubRepository.findOne(id);
  }

  async create(user: Groupsub) {
    //user.CreateTime = user.UpdateTime = new Date(Date.now());
    this.groupsubRepository.save(user);
  }

  async update(id: number, user: Groupsub): Promise<Groupsub> {
    const editedUser = await this.groupsubRepository.findOne(id);
    if (!editedUser) {
      throw new NotFoundException('User is not found');
    }
      editedUser.GroupID = user.GroupID;
      editedUser.NameGroup = user.NameGroup;
      editedUser.TotalCredit = user.TotalCredit;
      editedUser.UpdateBy = user.UpdateBy;
      /*editedUser.UpdateTime = new Date(Date.now());*/

    await editedUser.save();
    return editedUser;
  }

  async remove(id: number): Promise<void> {
    await this.groupsubRepository.delete(id);
  }
}
