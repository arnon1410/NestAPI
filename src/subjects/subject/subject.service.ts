import { Injectable , NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './subject.entity';

@Injectable()
export class SubjectService {constructor(
    @InjectRepository(Subject) private problem: Repository<Subject>,
  ) {}

  async findAll(): Promise<Subject[]> {
    return await this.problem.find();
  }

  findOne(id: number): Promise<Subject> {
    return this.problem.findOne(id);
  }

  async create(problem: Subject) {
    problem.CreateTime = problem.UpdateTime = new Date(Date.now());
    this.problem.save(problem);
  }

  async update(id: number, problem: Subject): Promise<Subject> {
    const editedProblem = await this.problem.findOne(id);
    if (!editedProblem) {
      throw new NotFoundException('Problem is not found');
    }
   // editedUser.PrefixT = user.PrefixT;
   //    editedUser.FNameT = user.FNameT;
   //  editedUser.LNameT = user.LNameT;
   // editedUser.PrefixE = user.PrefixE;
  //editedUser.FNameE = user.FNameE;
 // editedUser.LNameE = user.LNameE;
 // editedUser.Sex = user.Sex;
  editedProblem.SubjectName = problem.SubjectName;
  //editedProblem.IsActive = problem.IsActive;
    //editedUser.Email = user.Email;
    //editedUser.Mobile = user.Mobile;
   // editedUser.LineID = user.LineID;
   // editedUser.UserRole = user.UserRole;
   editedProblem.UpdateBy = problem.UpdateBy;
   editedProblem.UpdateTime = new Date(Date.now());

    await editedProblem.save();
    return editedProblem;
  }

  async remove(id: number): Promise<void> {
    await this.problem.delete(id);
  }
}

