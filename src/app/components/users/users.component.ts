import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Array<any> = [];
  usersAll: Array<any> = [];
  constructor(private usersServices: UsersService) {}

  ngOnInit(): void {
    this.usersServices.getUsers().subscribe((response: any) => {
      this.users = response.results;
      this.usersAll = response.results;
    });
  }

  onKeyPressEvent(event: any) {
    this.users = this.usersAll.filter((user) =>
      user.email.includes(event.target.value) || 
      user.name.first.includes(event.target.value) ||
      user.name.last.includes(event.target.value)
    );
  }
}
