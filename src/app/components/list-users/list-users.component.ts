import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students/students.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  subscription: Subscription;
  students: Array<any> = [];

  constructor(private serviceStudents: StudentsService) { 
    this.subscription = this.serviceStudents.students.subscribe(
      (data) => (this.students = data)
    );
  }

  ngOnInit(): void {
  }

}
