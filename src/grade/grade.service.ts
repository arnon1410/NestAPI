import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
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

  async findByUserID(studentID: number): Promise<Grade[]> {
    const sql: any = getManager()
      .createQueryBuilder()
      .select('g.*')
      .addSelect('s.*')
      .from('grade', 'g')
      .innerJoin('subject', 's', 's.SubjectID = g.SubjectID')
      //.innerJoin('users', 'u', 'u..StudentID = g.StudentID')
      .where('g.StudentID = :studentID', {studentID: studentID})
      .orderBy('Term, Year');
    const results = await sql.getRawMany();
    return results;
    // return await this.gradeRepo.find({
    //   relations: ['users', 'subject'],
    //   where: { StudentID: studentID },
    // });
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