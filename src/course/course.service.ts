import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.find();
  }

  findOne(id: number): Promise<Course> {
    return this.courseRepository.findOne(id);
  }

  async create(course: Course) {
    //user.CreateTime = user.UpdateTime = new Date(Date.now());
    this.courseRepository.save(course);
  }

  async update(id: number, course: Course): Promise<Course> {
    const editedUser = await this.courseRepository.findOne(id);
    if (!editedUser) {
      throw new NotFoundException('User is not found');
    }
    await editedUser.save();
    return editedUser;
  }

  async remove(id: number): Promise<void> {
    await this.courseRepository.delete(id);
  }
}
