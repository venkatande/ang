import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
    student: Student= new Student();;
    id:string='';
  constructor(private route: ActivatedRoute,
    private router: Router, 
      private studentService: StudentService) {

   }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.studentService.getById(this.id).subscribe((data)=>{
      this.student= data; 
      console.log(this.student);
   }) 
  }

  onSubmit(): void {
    this.studentService.save(this.student).subscribe(result => this.gotoStudentList());
  }
  gotoStudentList() {
    this.router.navigate(['/studentlist']);
  }

}
