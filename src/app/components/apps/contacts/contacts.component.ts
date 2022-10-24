import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  active = 1;


  ngAfterViewInit(){
    const contact:any = document.querySelector('#mainContactList');
    let ps = new PerfectScrollbar(contact,{
      suppressScrollX:true
    });
  }
}
