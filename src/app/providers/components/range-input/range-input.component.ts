import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss']
})
export class RangeInputComponent implements OnInit {
  dateFormat: string = 'yyyy/MM/dd';
  monthFormat: string = 'yyyy/MM';
  dateRange: any = [];
  constructor() { 

  }

  ngOnInit() {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

}
