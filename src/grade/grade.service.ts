import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grade } from './grade.entity';

@Injectable()
export class GradeService {
  constructor(
    @InjectRepository(Grade)
    private subjectRepository: Repository<Grade>,
  ) {}

  async findAll(): Promise<Grade[]> {
    return await this.subjectRepository.find({
      relations: ['users'],
    });
  }

  findOne(id: number): Promise<Grade> {
    return this.subjectRepository.findOne(id);
  }

  async create(subject: Grade) {
    this.subjectRepository.save(subject);
  }

  async update(id: number, subject: Grade): Promise<Grade> {
    const editedSubject = await this.subjectRepository.findOne(id);
    if (!editedSubject) {
      throw new NotFoundException('User is not found');
    }
    editedSubject.GradeID = subject.GradeID;
    editedSubject.Grade = subject.Grade;
    editedSubject.Term = subject.Term;
    editedSubject.Year = subject.Year;
    editedSubject.CreateBy = subject.CreateBy;
    editedSubject.CreateTime = subject.CreateTime;
    editedSubject.UpdateBy = subject.UpdateBy;

    await editedSubject.save();
    return editedSubject;
  }

  async remove(id: number): Promise<void> {
    await this.subjectRepository.delete(id);
  }
}