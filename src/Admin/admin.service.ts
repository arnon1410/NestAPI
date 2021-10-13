import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async findAll(): Promise<Admin[]> {
    return await this.adminRepository.find();
  }

  findOne(id: number): Promise<Admin> {
    return this.adminRepository.findOne(id);
  }

  async create(user: Admin) {
    //user.CreateTime = user.UpdateTime = new Date(Date.now());
    this.adminRepository.save(user);
  }

  async update(id: number, user: Admin): Promise<Admin> {
    const editedUser = await this.adminRepository.findOne(id);
    if (!editedUser) {
      throw new NotFoundException('User is not found');
    }
    /*editedUser.PrefixT = user.;
    editedUser.UpdateTime = new Date(Date.now());*/

    await editedUser.save();
    return editedUser;
  }

  async remove(id: number): Promise<void> {
    await this.adminRepository.delete(id);
  }
}
