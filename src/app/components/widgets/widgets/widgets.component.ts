import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  active =1;
  constructor() { }

  ngOnInit(): void {
  }

  hideNavigationArrows = false;
  hideNavigationIndicators = false;

}
