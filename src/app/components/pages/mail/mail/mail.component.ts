import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  toggleMinMax = 'main-mail-compose';
  toggleFullScreen = "fas fa-compress";
  MaxMin: boolean = false;
  public fullScreen: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openSm(content:any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  // fullscreenToggle(){
  //   // main-mail-compose-minimize
  //   if (this.toggleFullScreen === 'fas fa-compress') {
  //     this.toggleFullScreen = "fas fa-expand";
  //   } else {
  //     this.toggleFullScreen = 'fas fa-compress';
  //   }

  // }

  minmax(){
    // if ( this.toggleFullScreen === 'main-mail-compose') {
    //   document.querySelector('main-mail-compose').classList.add('main-mail-compose-minimize');
    // } else {
    //   document.querySelector('main-mail-compose').classList.remove('main-mail-compose-minimize');
    // }
    
  }
  
}
