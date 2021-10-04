import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private dsStudents = new BehaviorSubject([]);
  students = this.dsStudents.asObservable();

  constructor() { }

  updateStudents(data: any){
    this.dsStudents.next(data);
  }

}
