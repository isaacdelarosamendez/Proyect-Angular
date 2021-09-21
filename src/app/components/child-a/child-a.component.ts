import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {

  @Input()
  nombres: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
