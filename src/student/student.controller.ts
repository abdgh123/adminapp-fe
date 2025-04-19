import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity'; 

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() dto: CreateStudentDto): Student {
    return this.studentService.create(dto);
  }

  @Get()
  findAll(): Student[] {
    return this.studentService.findAll();
  }
}