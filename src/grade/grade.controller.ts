import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Res,
  } from '@nestjs/common';
  import {Response, Request} from 'express';
  import {JwtService} from "@nestjs/jwt";
  import { GradeService } from './grade.service';
  import { Grade } from './grade.entity';
  import { Observable, of } from 'rxjs';

@Controller('grade')
export class GradeController {}
