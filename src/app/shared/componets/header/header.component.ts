import { Component, OnInit, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Subscription } from 'rxjs';
import { NavService } from '../../services/nav.service';
import { SidebarRightService } from '../../services/sidebar-right.service';
import { SwitcherService } from '../../services/switcher.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

    layoutSubscription: Subscription;
    public isCollapsed = true;

    constructor(
        private sidebarRightservice: SidebarRightService,
        public navServices: NavService,
        public SwitcherService: SwitcherService,
        private router: Router,
    ) {
        this.layoutSubscription = sidebarRightservice.changeEmitted.subscribe(
            direction => {
                const dir = direction.direction;

            }
        )
    }

    ngOnInit(): void {
        let navbarForm: any = document.querySelector('.navbar-form')
        navbarForm.addEventListener('click', (event: any) => {
            event.preventDefault();
            return;
        }, { passive: false })
    }

    toggleSwitcher() {
        this.SwitcherService.emitChange(true);
    }

    toggleSidebarNotification() {
        this.sidebarRightservice.emitSidebarNotifyChange(true);
    }
    toggleSidebarOpen() {
        if ((this.navServices.collapseSidebar = true)) {
            let mainBody: any = document.querySelector('.main-body')
            mainBody.classList.add('sidenav-toggled');
            mainBody.classList.add('sidebar-gone');
            mainBody.classList.add('sidebar-mini');
        }
    }
    toggleSidebarClose() {
        if ((this.navServices.collapseSidebar = true)) {
            let removeMainBody: any = document.querySelector('.main-body')
            removeMainBody.classList.remove('sidenav-toggled');
        }
    }

    search() {
        let navabarForm: any = document.querySelector('.navbar-form ')
        navabarForm.classList.toggle('d-none')
    }
    close() {
        let navbarD: any = document.querySelector('.navbar-form ')
        navbarD.classList.add('d-none')
    }

    ngAfterViewInit() {

        const chat: any = document.querySelector('.chat-scroll');
        let ps1 = new PerfectScrollbar(chat, {
            wheelPropagation: false,
            wheelSpeed: 2,
            suppressScrollX: true
        });

        const notification: any = document.querySelector('.Notification-scroll');
        let ps2 = new PerfectScrollbar(notification, {
            wheelPropagation: false,
            wheelSpeed: 2,
            suppressScrollX: true
        });
    }

    SearchActive = "Notactive"
    searchClass(item: any) {
        // this.SearchActive=="nonactive"? "active":"nonactive"
        console.log(item);
        if (item == "active") {
            this.SearchActive = "active"
        }
        if (item == "Notactive") {
            this.SearchActive = "Notactive"
        }
    }


    exit(){
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']).then(() => {
           window.location.reload();
        });; 
     }


}
