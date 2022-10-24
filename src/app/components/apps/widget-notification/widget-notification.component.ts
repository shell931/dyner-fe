import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-notification',
  templateUrl: './widget-notification.component.html',
  styleUrls: ['./widget-notification.component.scss']
})
export class WidgetNotificationComponent implements OnInit {

  public isClosed = false;
  public isClosed1 = false;
  public isClosed2 = false;


  constructor(
  ) { }

  ngOnInit(): void {
  }


  Closetoggle() {
    this.isClosed = true
  }
  Closetoggle1() {
    this.isClosed1 = true
  }
  Closetoggle2() {
    this.isClosed2 = true
  }

}
