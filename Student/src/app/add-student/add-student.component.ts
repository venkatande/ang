import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
    templateUrl: './add-student.component.html' })


export class AddStudentComponent {
    student: Student;
  constructor(private route: ActivatedRoute,
    private router: Router, 
      private studentService: StudentService) {
  this.student = new Student(); }


  onSubmit(): void {
    this.studentService.save(this.student).subscribe(result => this.gotoStudentList());
  }
  gotoStudentList() {
    this.router.navigate(['/studentlist']);
  }
}