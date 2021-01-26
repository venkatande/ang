import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({ templateUrl: './student-list.component.html' })

export class StudentListComponent implements OnInit {
    students: Student[]=[];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  this.studentService.findAll().subscribe(data => {
      this.students = data;
    });
  }

}