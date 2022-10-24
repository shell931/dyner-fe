import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // const listContainer:any = document.querySelector('#ChatList');
    // const bodyContainer:any = document.querySelector('#ChatBody');
    
    // const ps = new PerfectScrollbar(listContainer,{
    //   suppressScrollX:true
    // });
    // const ps1 = new PerfectScrollbar(bodyContainer,{
    //   suppressScrollX: true
    // });
    
    let content:any = document.querySelector('#ChatList');
    let content1:any = document.querySelector('#ChatBody');

    let ps = new PerfectScrollbar(content);
    let ps1 = new PerfectScrollbar(content1,{wheelPropagation: false});

  }
  
}
