import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { StudentListComponent } from './student-list';
import { AddStudentComponent } from './add-student';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import { EditStudentComponent } from './edit-student/edit-student.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
