import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { toUserDto } from 'src/shared/mapper';
import { comparePasswords } from 'src/shared/utils';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/user-login.dto';
import { CreateUserDto } from './dto/user.create.dto';
import { UserDto } from './dto/user.dto';
import { Users } from './users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  // findOne(id: number): Promise<Users> {
  //   return this.userRepo.findOne(id, {
  //     relations: ['userRoles', 'tasks'],
  //   });
  // }
  login // findOne(id: number): Promise<Users> {
    (user: Users) {
      throw new Error('Method not implemented.');
  }
  constructor(@InjectRepository(Users) private userRepo: Repository<Users>) {}

  async findAll(): Promise<Users[]> {
    return await this.userRepo.find({
      relations: ['userRoles'],
    });
  }

  // findOne(id: number): Promise<Users> {
  //   return this.userRepo.findOne(id, {
  //     relations: ['userRoles', 'tasks'],
  //   });
  // }
  async findOne(options?: any): Promise<UserDto> {
    const user = await this.userRepo.findOne(options);
    return toUserDto(user);
  }
  async findByLogin({ UserName, Password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepo.findOne({
      where: { UserName, IsActive: 1 },
    });

    if (!user)
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);

    // compare passwords
    const areEqual = await comparePasswords(user.Password, Password);
    if (!areEqual)
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      console.log(user);
    return toUserDto(user);
  }

  async findByPayload({ UserName }: any): Promise<UserDto> {
    return await this.findOne({ where: { UserName } });
  }

  async register(userDto: CreateUserDto): Promise<UserDto> {
    const { UserName, Password, Email } = userDto;

    // check if the user exists in the db
    const userInDb = await this.userRepo.findOne({ where: { UserName } });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user = new Users();
    user.UserName = UserName;
    user.Password = Password;
    user.Email = Email;

    await this.userRepo.save(user);

    return toUserDto(user);
  }

  async create(user: Users) {
    const UserName = user.UserName;
    const userInDb = await this.userRepo.findOne({ where: { UserName } });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    await bcrypt.hash(user.Password, 8,(err, res)=> {
      user.Password = res;
      this.userRepo.save(user);
    });
    
  }

  async update(id: number, user: Users): Promise<Users> {
    const editedUser = await this.userRepo.findOne(id);
    if (!editedUser) {
      throw new NotFoundException('User is not found');
    }
    editedUser.StudentID = user.StudentID;
    editedUser.Name = user.Name;
    editedUser.Email = user.Email;
    editedUser.UserName = user.UserName;
    //compare password เช็คว่าเป็นรหัสเก่ามั้ย
    //const areEqual = await comparePasswords(editedUser.Password, user.Password);
    //console.log(areEqual);
    //if (!areEqual){
      //await bcrypt.hash(user.Password, 8,(err, res)=> {

        //editedUser.Password = res;
       // editedUser.save();
     // })
   //}
    editedUser.Name = user.Name;
    editedUser.Faculty = user.Faculty;
    editedUser.Major = user.Major;
    editedUser.IsActive = user.IsActive;
    editedUser.UserRole = user.UserRole;
    editedUser.UpdateBy = user.UpdateBy;
    //editedUser.userRoles = user.userRoles;

    await editedUser.save();
    return editedUser;
    
    
  }

  async remove(id: number): Promise<void> {
    await this.userRepo.delete(id);
  }
}
