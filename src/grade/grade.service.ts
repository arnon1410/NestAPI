import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grade } from './grade.entity';

@Injectable()
export class GradeService {
  constructor(
    @InjectRepository(Grade)
    private gradeRepo: Repository<Grade>,
  ) {}

  async findAll(): Promise<Grade[]> {
    return await this.gradeRepo.find({
      relations: ['users', 'subject'],
    });
  }

  findOne(id: number): Promise<Grade> {
    return this.gradeRepo.findOne(id);
  }

  async create(grade: Grade) {
    this.gradeRepo.save(grade);
  }

  async update(id: number, grade: Grade): Promise<Grade> {
    const edited = await this.gradeRepo.findOne(id);
    if (!edited) {
      throw new NotFoundException('Grade is not found');
    }
    edited.Grade = grade.Grade;
    edited.Term = grade.Term;
    edited.Year = grade.Year;
    edited.UpdateBy = grade.UpdateBy;

    await edited.save();
    return edited;
  }

  async remove(id: number): Promise<void> {
    await this.gradeRepo.delete(id);
  }
}