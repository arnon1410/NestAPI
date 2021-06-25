import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne(id);
  }

  async create(user: Users) {
    user.CreateTime = user.UpdateTime = new Date(Date.now());
    this.usersRepository.save(user);
  }

  async update(id: number, user: Users): Promise<Users> {
    const editedUser = await this.usersRepository.findOne(id);
    if (!editedUser) {
      throw new NotFoundException('User is not found');
    }
    editedUser.PrefixT = user.PrefixT;
    editedUser.FNameT = user.FNameT;
    editedUser.LNameT = user.LNameT;
    editedUser.PrefixE = user.PrefixE;
    editedUser.FNameE = user.FNameE;
    editedUser.LNameE = user.LNameE;
    editedUser.Sex = user.Sex;
    editedUser.IDCard = user.IDCard;
    editedUser.IsActive = user.IsActive;
    editedUser.Email = user.Email;
    editedUser.Mobile = user.Mobile;
    editedUser.LineID = user.LineID;
    editedUser.UserRole = user.UserRole;
    editedUser.UpdateBy = user.UpdateBy;
    editedUser.UpdateTime = new Date(Date.now());

    await editedUser.save();
    return editedUser;
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
