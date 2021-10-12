import { Injectable , NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProblemTypes } from './problem-type.entity';

@Injectable()
export class ProblemTypeService {
    constructor(
        @InjectRepository(ProblemTypes) private problemTypes: Repository<ProblemTypes>,
      ) {}
    
      async findAll(): Promise<ProblemTypes[]> {
        return await this.problemTypes.find();
      }
    
      findOne(id: number): Promise<ProblemTypes> {
        return this.problemTypes.findOne(id);
      }
    
      async create(problem: ProblemTypes) {
        problem.CreateTime = problem.UpdateTime = new Date(Date.now());
        this.problemTypes.save(problem);
      }
    
      async update(id: number, problem: ProblemTypes): Promise<ProblemTypes> {
        const editedProblem = await this.problemTypes.findOne(id);
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
      editedProblem.ProblemTypeName = problem.ProblemTypeName;
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
        await this.problemTypes.delete(id);
      }
    }
    

