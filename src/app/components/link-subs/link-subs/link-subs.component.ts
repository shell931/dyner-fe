// MAT TABLE

import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LinksSubsService } from 'src/app/services/links-subs.service';
import { BaseService } from 'src/app/services/base-service.service';
import { ProfileService } from 'src/app/services/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-link-subs',
  templateUrl: './link-subs.component.html',
  styleUrls: ['./link-subs.component.scss'],
})
export class LinkSubsComponent implements OnInit {
  displayedColumnsSub: string[] = [
    'description',
    'product_code',
    'subtotal',
    // 'payment_day',
    'created_at',
    'total',
    'status',
    'action',
  ];
  linksSubsList: any[] = [];
  dataSource = new MatTableDataSource<any>(this.linksSubsList);
  // dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public validate_active: boolean = false;

  constructor(
    private LinksSubsService: LinksSubsService,
    private baseService: BaseService,
    private changeDetectorRef: ChangeDetectorRef,
    private profileService: ProfileService,
    public dialog: MatDialog,
    public router: Router
  ) {
    // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getStatusLabel(status: string): string {
    switch (status) {
      case "1":
        return 'Nuevo';
      case "2":
        return 'Activo';
      case "3":
        return 'Desaprobado';
      default:
        return '';
    }
  }
  ngOnInit(): void {
    this.profileService.GetProfileData().subscribe(
      (Alldata) => {
        this.GetProfileDataF(Alldata);
      },
      (error) => {
        this.baseService.GetErrorAuthSesion(error);
      }
    );

    this.LinksSubsService.GetLinksSubsList().subscribe(
        (LinkSubsListdata) => {
          this.GetLinksSubsListF(LinkSubsListdata);
        },
        (error) => {
          this.baseService.GetErrorAuthSesion(error);
      }
    );
  }

  GetProfileDataF(ProfileData) {
    this.validate_active = ProfileData.data.user.client.active;
    console.log(this.validate_active);
    if (this.validate_active == false) {
      this.openDialog();
    }
  }

  GetLinksSubsListF(LinkSubsListdata) {
    this.linksSubsList =LinkSubsListdata.data.data;
    this.dataSource = new MatTableDataSource<any>(this.linksSubsList);
    // setTimeout(() => this.dataSource.paginator = this.paginator);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    }, 0);
  }

  openDialog() {
    this.dialog.open(DialogNoActive);
  }

  redirect_account() {
    this.router.navigate(['/profile']);
    this.dialog.closeAll();
  }

  deleteLinkSubs(LinkSubskId) {


    this.LinksSubsService.DeleteSubsLink(LinkSubskId).subscribe(
      () => {
        this.LinksSubsService.GetLinksSubsList().subscribe(
          (LinkSubsListdata) => {
            this.GetLinksSubsListF(LinkSubsListdata);
          },
        );
      },
      (error) => {
        this.baseService.GetErrorAuthSesion(error);
      }
    );
  }

  confirmDeleteLinkSubs(LinkSubsId){
    Swal.fire({
      icon: "warning",
      title: 'Estas seguro que deseas realizar esta acción?',
      text: "Una vez eliminado no podra recuperar esta información!",
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      customClass : {
        confirmButton: 'btn btn-success-dyner'
      },
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteLinkSubs(LinkSubsId);
      }
    })
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-sub-noactive.html',
  styleUrls: ['./dialog-elements-sub-noactive.css'],
})
export class DialogNoActive {
  constructor(public dialog: MatDialog, public router: Router) {}
  close(): void {
    this.dialog.closeAll();
  }

  redirect_account() {
    this.router.navigate(['/profile-documents']);
    this.dialog.closeAll();
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//     const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//         NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//     return {
//         id: id.toString(),
//         name: name,
//         progress: Math.round(Math.random() * 100).toString(),
//         fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
//     };
// }
