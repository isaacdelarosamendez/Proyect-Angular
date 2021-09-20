import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  first_name: string = "Isaac";
  last_name: string = "De la Rosa";
  age: number = 27;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    alert(this.first_name)
  }
}
