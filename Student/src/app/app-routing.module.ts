import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HomeComponent } from './home';
import { StudentListComponent } from './student-list';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'studentlist', component: StudentListComponent },
    { path: 'addstudent', component: AddStudentComponent },
    { path: 'editstudent/:id', component: EditStudentComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
