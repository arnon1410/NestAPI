import { Injectable , NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Problems } from './problem.entity';

@Injectable()
export class ProblemService {
  constructor(
    @InjectRepository(Problems) private problemsRepository: Repository<Problems>,
  ) {}

  async findAll(): Promise<Problems[]> {
    return await this.problemsRepository.find();
  }

  findOne(id: number): Promise<Problems> {
    return this.problemsRepository.findOne(id);
  }

  async create(problem: Problems) {
    problem.CreateTime = problem.UpdateTime = new Date(Date.now());
    this.problemsRepository.save(problem);
  }

  async update(id: number, problem: Problems): Promise<Problems> {
    const editedProblem = await this.problemsRepository.findOne(id);
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
   editedProblem.ProblemName = problem.ProblemName;
  editedProblem.IsActive = problem.IsActive;
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
    await this.problemsRepository.delete(id);
  }
}

