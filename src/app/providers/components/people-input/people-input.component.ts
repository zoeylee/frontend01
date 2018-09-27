import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-input',
  templateUrl: './people-input.component.html',
  styleUrls: ['./people-input.component.scss']
})
export class PeopleInputComponent implements OnInit {
  listOfOption = [1,2,3];
  selected: string;
  demoValue: number = 3;
  selectedValue : string = "1";
  checked: boolean = true;
  size = 'default';
  singleValue = '1';
  requirements: string[] = [
    'rooms',
    'adult',
    'children'
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
