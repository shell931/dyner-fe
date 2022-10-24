import { Component, HostListener, OnInit } from '@angular/core';
import { SwitcherService } from 'src/app/shared/services/switcher.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})

export class FullLayoutComponent implements OnInit {

  constructor(public SwitcherService : SwitcherService) { }
  // app-notification-sidebar
  
  ngOnInit(): void {
  }
  

  ngOnDestroy(){
    location.reload()
  }
  
  mainSidebarOpen: any;
  hoverEffect($event:any) {
    this.mainSidebarOpen = $event.type == 'mouseover' ? 'sidenav-toggled-open' : '';
  }

  clickOnBody(){
    this.SwitcherService.emitChange(false);
    
  }

  scrolled: boolean = false;


  @HostListener('window:resize', [])
  onWindowScroll() {
    this.scrolled = window.matchMedia("(max-width: 991px)").matches;
  }




}
