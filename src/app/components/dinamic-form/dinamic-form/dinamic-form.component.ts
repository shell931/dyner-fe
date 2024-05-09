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
import { DinamicFormService } from 'src/app/services/dinamic-form.service';
import { BaseService } from 'src/app/services/base-service.service';
import { ProfileService } from 'src/app/services/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
    public already_exists: boolean = false;

    formForm!: FormGroup;
    dynamicForm!: FormGroup;
    your_subdomain: string = '';
    filesComplement: File[] = [];
    public validate_img: boolean = false;

    buttonText: string = 'Pagar';
    backgroundColor: string = '#016FD0';
    textColor: string = '#fff';
    borderRadius: string = '48px';
    fontFamily: string = 'normal';
    padding: string = '12px 80px';
    fontWeight: string = '700';
    fontSize: string = '16px';
    lineHeigh: string = '20px';
    height: string = '44px';
    border: string = 'solid 2px #016FD0';


    constructor(
        private DinamicFormService: DinamicFormService,
        private baseService: BaseService,
        private changeDetectorRef: ChangeDetectorRef,
        private profileService: ProfileService,
        public dialog: MatDialog,
        public router: Router,
        private formGroup: FormBuilder,
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
        this.formForm = this.formGroup.group({
            subdomain: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]]
        });

        this.dynamicForm = this.formGroup.group({
            name_client: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]]
        });



        this.DinamicFormService.GetDynamicFormById(220).subscribe(
            (Alldata) => {
                this.GetDynamicFormByIdF(Alldata);
            },
            (error) => {
                this.baseService.GetErrorAuthSesion(error);
            }
        );
    }


    GetDynamicFormByIdF(Alldata) {

        // this.estado = "pendiente"
        // your_subdomain
        console.log(Alldata);

        if (Alldata.success == false) {
            this.estado = ""
        } else {
            if (Alldata.data.status == 1) {
                this.estado = "pendiente"
            } else if (Alldata.data.status == 2) {
                this.estado = "aprobado"
                this.your_subdomain = Alldata.data.subdomain;
            }

        }
    }


    //START SET EVENT FROM DROPZONE COMPLEMENT
    selectFileComplement(event) {
        if (this.filesComplement.length == 0) {
            this.filesComplement.push(...event.addedFiles);
        }
    }

    onRemoveComplement(event) {
        this.filesComplement.splice(this.filesComplement.indexOf(event), 1);
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

    actualizarLabel() {
    }

    submitbutton() {
        this.already_exists = false;
        if (this.formForm.valid) {
            let myObjDynamicForm = {
                subdomain: this.formForm.value.subdomain
            };
            this.DinamicFormService.CreateDynamicForm(myObjDynamicForm)
                .subscribe((result: any) => {
                    if (result.data.state == true) {
                        this.already_exists = false;
                        this.estado = "pendiente";
                    } else {
                        this.already_exists = true;
                    }

                });
        } else {
            for (let i in this.formForm.controls) {
                this.formForm.controls[i].markAsTouched();
            }
        }

    }

}

@Component({
    selector: 'dialog-elements-example-dialog',
    templateUrl: './dialog-elements-noactive.html',
    styleUrls: ['./dialog-elements-noactive.css'],
})
export class DialogNoActive {
    constructor(public dialog: MatDialog, public router: Router) { }
    close(): void {
        this.dialog.closeAll();
    }

    redirect_account() {
        this.router.navigate(['/profile-documents']);
        this.dialog.closeAll();
    }
}

