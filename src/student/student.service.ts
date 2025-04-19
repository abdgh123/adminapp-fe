import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  private students: Student[] = [];
  private id = 1;

  create(dto: CreateStudentDto): Student {
    const newStudent: Student = { id: this.id++, ...dto , lastUpdate: new Date().toISOString(), };
    this.students.push(newStudent);
    return newStudent;
  }

  findAll(): Student[] {
    return this.students;
  }
}
