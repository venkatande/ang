import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl:string='';
  constructor(private http: HttpClient) { 
    this.studentUrl='http://localhost:8081/students/';
}
public findAll(): Observable<Student[]> {
  return this.http.get<Student[]>(this.studentUrl);
}
public getById(id: String):Observable<Student> {
  return this.http.get<Student>(this.studentUrl+id);
}

public save(student: Student) {
  return this.http.post<Student>(this.studentUrl, student);
}
  
}
