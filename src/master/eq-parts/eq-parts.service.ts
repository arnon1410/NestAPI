import { Injectable , NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EqParts } from './eq-parts.entity';

@Injectable()
export class EqPartsService {constructor(
    @InjectRepository(EqParts) private problem: Repository<EqParts>,
  ) {}

  async findAll(): Promise<EqParts[]> {
    return await this.problem.find();
  }

  findOne(id: number): Promise<EqParts> {
    return this.problem.findOne(id);
  }

  async create(problem: EqParts) {
    problem.CreateTime = problem.UpdateTime = new Date(Date.now());
    this.problem.save(problem);
  }

  async update(id: number, problem: EqParts): Promise<EqParts> {
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
  editedProblem.EqPartName = problem.EqPartName;
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
    await this.problem.delete(id);
  }
}

