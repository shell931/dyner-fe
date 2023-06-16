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
import { DinamicFormService} from 'src/app/services/dinamic-form.service';
import { BaseService } from 'src/app/services/base-service.service';
import { ProfileService } from 'src/app/services/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dinamic-form',
  templateUrl: './dinamic-form.component.html',
  styleUrls: ['./dinamic-form.component.scss'],
})
export class DinamicFormComponent implements OnInit {

  estado!: string;
  nombreComercio: string = '';
  logoComercio: File | null = null;
  seleccionBoton: string | null = null;
  // dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public validate_active: boolean = false;

  constructor(
    private DinamicFormService: DinamicFormService,
    private baseService: BaseService,
    private changeDetectorRef: ChangeDetectorRef,
    private profileService: ProfileService,
    public dialog: MatDialog,
    public router: Router
  ) {

  }
  onLogoChange(event: any) {
    this.logoComercio = event.target.files[0];
  }

  getLogoUrl(): string | null {
    return this.logoComercio ? URL.createObjectURL(this.logoComercio) : null;
  }
  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

  }

  ngOnInit(): void {


    this.estado="aprobado"

  }

  GetProfileDataF(ProfileData) {
    this.validate_active = ProfileData.data.user.client.active;
    console.log(this.validate_active);
    if (this.validate_active == false) {
      this.openDialog();
    }
  }



  openDialog() {
    this.dialog.open(DialogNoActive);
  }

  redirect_account() {
    this.router.navigate(['/profile']);
    this.dialog.closeAll();
  }


}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-noactive.html',
  styleUrls: ['./dialog-elements-noactive.css'],
})
export class DialogNoActive {
  constructor(public dialog: MatDialog, public router: Router) {}
  close(): void {
    this.dialog.closeAll();
  }

  redirect_account() {
    this.router.navigate(['/profile']);
    this.dialog.closeAll();
  }
}

