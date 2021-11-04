import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Activity } from './activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private ActivityRepo: Repository<Activity>,
  ) {}

  async findAll(): Promise<Activity[]> {
    return await this.ActivityRepo.find({
      relations: ['users'],
    });
  }
  async findByUserID(studentID: number): Promise<Activity[]> {
    const sql: any = getManager()
      .createQueryBuilder()
      .select('a.*')
      .addSelect('u.*')
      .from('activity', 'a')
      // .innerJoin('users', 'u', 'u.SubjectID = a.SubjectID')
      .innerJoin('users', 'u', 'u.StudentID = a.StudentID')
      .where('a.StudentID = :studentID', {studentID: studentID})
      // .orderBy('Term, Year');
    const results = await sql.getRawMany();
    return results;
    // return await this.gradeRepo.find({
    //   relations: ['users', 'subject'],
    //   where: { StudentID: studentID },
    // });
  }

  findOne(id: number): Promise<Activity> {
    return this.ActivityRepo.findOne(id);
  }

  async create(activity: Activity) {
    this.ActivityRepo.save(activity);
  }

  async update(id: number, activity: Activity): Promise<Activity> {
    const edited = await this.ActivityRepo.findOne(id);
    if (!edited) {
      throw new NotFoundException('Activity is not found');
    }
    edited.ActivityID = activity.ActivityID;
    edited.ActivityName = activity.ActivityName;
    edited.ActivityType = activity.ActivityType;
    edited.ActivityCount = activity.ActivityCount;
    edited.UpdateBy = activity.UpdateBy;

    await edited.save();
    return edited;
  }

  async remove(id: number): Promise<void> {
    await this.ActivityRepo.delete(id);
  }
}