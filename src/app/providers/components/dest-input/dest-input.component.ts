import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dest-input',
  templateUrl: './dest-input.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./dest-input.component.scss']
})
export class DestInputComponent implements OnInit {

  inputValue: string;
  optionGroups: any[];

  onChange(value: any): void {
    console.log(value);
  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.optionGroups = [{
        title: 'Best Trip',
        children: [{
          title: 'London',
          count: 10000
        },         {
          title: 'Taiwan',
          count: 10600
        },         {
          title: 'Italiy',
          count: 10600
        }]
      },              {
        title: 'City',
        children: [{
          title: 'Singapore',
          count: 60100
        },         {
          title: 'Thailand',
          count: 30010
        },         {
          title: 'Tokyo',
          count: 30010
        },{
          title: 'Korean',
          count: 30010
        }]
      },              {
        title: 'Area',
        children: [{
          title: 'Brazil',
          count: 100000
        }, {
          title: 'Swizterland',
          count: 30010
        }, {
          title: 'Denmark',
          count: 30010
        }, {
          title: 'Japen',
          count: 30010
        }]
      }];
    }, 1000);
  }

}
