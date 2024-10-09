import { Component, OnInit, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Subscription, map } from 'rxjs';
import { NavService } from '../../services/nav.service';
import { SidebarRightService } from '../../services/sidebar-right.service';
import { SwitcherService } from '../../services/switcher.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { NotificationService } from 'src/app/services/notification.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NotificationService],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public notifications: Array<any> = [];
  public seeAllNotifications: boolean = false;
  public notificationMessageModal: string = '';
  layoutSubscription: Subscription;
  public isCollapsed = true;
  name_client: any = '';
  avatar: any;

  constructor(
    private sidebarRightservice: SidebarRightService,
    public navServices: NavService,
    public SwitcherService: SwitcherService,
    private router: Router,
    private profileService: ProfileService,
    private notificationService: NotificationService,
    private modalService: NgbModal
  ) {
    this.layoutSubscription = sidebarRightservice.changeEmitted.subscribe(
      (direction) => {
        const dir = direction.direction;
      }
    );
  }

  ngOnInit(): void {
    let navbarForm: any = document.querySelector('.navbar-form');
    this.profileService
      .GetProfileData()
      .subscribe((res) => this.GetProfileDataF(res));
    navbarForm.addEventListener(
      'click',
      (event: any) => {
        event.preventDefault();
        return;
      },
      { passive: false }
    );
    // Get not read notifications
    this.getNotifications(this.seeAllNotifications);
  }

  toggleSwitcher() {
    this.SwitcherService.emitChange(true);
  }

  toggleSidebarNotification() {
    this.sidebarRightservice.emitSidebarNotifyChange(true);
  }
  toggleSidebarOpen() {
    if ((this.navServices.collapseSidebar = true)) {
      let mainBody: any = document.querySelector('.main-body');
      mainBody.classList.add('sidenav-toggled');
      mainBody.classList.add('sidebar-gone');
      mainBody.classList.add('sidebar-mini');
    }
  }
  toggleSidebarClose() {
    if ((this.navServices.collapseSidebar = true)) {
      let removeMainBody: any = document.querySelector('.main-body');
      removeMainBody.classList.remove('sidenav-toggled');
    }
  }

  search() {
    let navabarForm: any = document.querySelector('.navbar-form ');
    navabarForm.classList.toggle('d-none');
  }
  close() {
    let navbarD: any = document.querySelector('.navbar-form ');
    navbarD.classList.add('d-none');
  }

  ngAfterViewInit() {
    const chat: any = document.querySelector('.chat-scroll');
    let ps1 = new PerfectScrollbar(chat, {
      wheelPropagation: false,
      wheelSpeed: 2,
      suppressScrollX: true,
    });

    const notification: any = document.querySelector('.Notification-scroll');
    let ps2 = new PerfectScrollbar(notification, {
      wheelPropagation: false,
      wheelSpeed: 2,
      suppressScrollX: true,
    });
  }

  SearchActive = 'Notactive';
  searchClass(item: any) {
    // this.SearchActive=="nonactive"? "active":"nonactive"
    console.log(item);
    if (item == 'active') {
      this.SearchActive = 'active';
    }
    if (item == 'Notactive') {
      this.SearchActive = 'Notactive';
    }
  }

  exit() {

    localStorage.removeItem('access_token');
    this.router.navigate(['/login']).then(() => {
      // window.location.reload();
    });
  }

  profile() {
    this.router.navigate(['/profile']).then(() => {
      // window.location.reload();
    });
  }

  documents() {
    this.router.navigate(['/profile-documents']).then(() => {
      // window.location.reload();
    });
  }

  GetProfileDataF(ProfileData) {
    // console.log(ProfileData.data.user.client.nombre);
    this.name_client = ProfileData.data.user.client.nombre;
    this.avatar = ProfileData.data.user.client.avatar;
  }

  public getNotifications(seeAllNotifications) {
    if (seeAllNotifications) {
      this.notificationService
        .getAllNotificationsService()
        .subscribe((data) => (this.notifications = data));
    } else {
      this.notificationService
        .getNotReadNotificationsService()
        .subscribe((data) => (this.notifications = data));
    }
    this.seeAllNotifications = !this.seeAllNotifications;
  }

  public openNotification(modal: any, idNotification: number, message: string) {
    this.notificationService
      .readMessageService(idNotification)
      .subscribe(() => {});
    this.notificationMessageModal = message;
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__zoomIn',
    });
  }
}
