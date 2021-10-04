import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentsService } from '../students/students.service';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss']
})
export class FormStudentComponent implements OnInit {
  first_name: string='';
  last_name: string='';
  subscription: Subscription;
  students: Array<any> = [];
  constructor(private serviceStudents: StudentsService) { 
    this.subscription = this.serviceStudents.students.subscribe(
      (data) => (this.students = data)
    );
  }

  ngOnInit(): void {
  }

  onClicAdd() {
    if (this.first_name === '') {
      alert('The value Fisrt Name is required');
      return;
    }
    if (this.last_name === '') {
      alert('The value Last Name is required');
      return;
    }
   /* if (this.students.some(student => student === this.name)) {
      alert('The value Name is unique');
      return;
    }*/
    const new_student = {
      first_name: this.first_name,
      last_name: this.last_name
    };
    this.students.push(new_student);
    this.serviceStudents.updateStudents(this.students);
    this.first_name = '';
    this.last_name = '';
  }
}
