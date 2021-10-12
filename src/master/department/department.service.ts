import { Injectable , NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departments } from './department.entity';

@Injectable()
export class DepartmentService {
    constructor(
        @InjectRepository(Departments) private department: Repository<Departments>,
      ) {}
    
      async findAll(): Promise<Departments[]> {
        return await this.department.find();
      }
    
      findOne(id: number): Promise<Departments> {
        return this.department.findOne(id);
      }
    
      async create(problem: Departments) {
        problem.CreateTime = problem.UpdateTime = new Date(Date.now());
        this.department.save(problem);
      }
    
      async update(id: number, problem: Departments): Promise<Departments> {
        const editedProblem = await this.department.findOne(id);
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
      editedProblem.DepartmentName = problem.DepartmentName;
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
        await this.department.delete(id);
      }
    }
    
