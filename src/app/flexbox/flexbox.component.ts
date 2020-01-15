import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss']
})
export class FlexboxComponent implements OnInit {

  flexDirection: any = 'row';
  justifyContent: any = 'flex-start';
  alignItems: any = 'flex-start';
  flex: any;

  constructor() {
  }

  ngOnInit() {
  }

}
