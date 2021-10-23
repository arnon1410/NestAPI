
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NameGroup } from 'src/GroupSub/groupsub.entity';
import { Repository } from 'typeorm';
import { Subject } from './subject.entity';


@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  async findAll(): Promise<Subject[]> {
    return await this.subjectRepository.find({
      relations: ['groupsub'],
    });
  }

  findOne(id: number): Promise<Subject> {
    return this.subjectRepository.findOne(id);
  }

  async create(subject: Subject) {
    subject.NameGroup = NameGroup.Ax1;
    this.subjectRepository.save(subject);
  }

  async update(id: number, subject: Subject): Promise<Subject> {
    const editedSubject = await this.subjectRepository.findOne(id);
    if (!editedSubject) {
      throw new NotFoundException('User is not found');
    }
    editedSubject.SubjectID = subject.SubjectID;
    editedSubject.SubjectNameEN = subject.SubjectNameEN;
    editedSubject.SubjectNameTH = subject.SubjectNameTH;
    editedSubject.Credit = subject.Credit;

    await editedSubject.save();
    return editedSubject;
  }

  async remove(id: number): Promise<void> {
    await this.subjectRepository.delete(id);
  }
}
