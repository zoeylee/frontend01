import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '~services';

import { environment } from '~environments/environment';
import * as _ from 'lodash';
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  tabs: string[] = [ "All Rooms", "Agoda homes" ];
  size: string = "large";
 
  constructor() {
    
  }

  ngOnInit() {

  }


}
