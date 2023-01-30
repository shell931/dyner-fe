import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { BaseService } from "src/app/services/base-service.service";
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { AnimationOptions, LottieTransferState } from 'ngx-lottie';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-datafono-digital',
    templateUrl: './datafono-digital.component.html',
    styleUrls: ['./datafono-digital.component.scss']
})
export class DatafonoDigitalComponent implements OnInit {

    url_data_web: any;
    elementType = NgxQrcodeElementTypes.URL;
    correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    value = "";
    gatewayUrl = environment.api.gatewayUrl + 'pay/';
    public validate_copy: boolean = false;
    public validate_active: boolean = true;


    constructor(
        private baseService: BaseService,
        private profileService: ProfileService,
        public dialog: MatDialog,
        public router: Router
    ) { }

    ngOnInit(): void {

        this.profileService.GetProfileData().subscribe(
            (Alldata) => {
                this.GetProfileDataF(Alldata)
            },
            error => {
                this.baseService.GetErrorAuthSesion(error)
            }
        );

    }

    GetProfileDataF(ProfileData) {
        this.url_data_web = this.gatewayUrl + ProfileData.data.user.client.url_data_web;
        this.validate_active = ProfileData.data.user.client.active;
        console.log(this.validate_active);
        if (this.validate_active == false) {
            this.openDialog();
        }
    }

    copyInputMessage(inputElement) {
        this.validate_copy = false;
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
        this.validate_copy = true;
    }

    options: AnimationOptions = {
        path: "./assets/img/lotties/6006-qr-code-scan.json"
    };

    // options: AnimationOptions = {
    //     animationData: LottieTransferState.get('data.json'),
    // };

    openDialog() {
        this.dialog.open(DialogElementsExampleDialog);
    }

    redirect_account() {
        this.router.navigate(['/profile']);
        this.dialog.closeAll();
    }



}


@Component({
    selector: 'dialog-elements-example-dialog',
    templateUrl: './dialog-elements-noactive.html',
    styleUrls: ['./dialog-elements-noactive.css']
})
export class DialogElementsExampleDialog {
    constructor(
        public dialog: MatDialog,
        public router: Router,
    ) { }
    close(): void {
        this.dialog.closeAll();
    }

    redirect_account() {
        this.router.navigate(['/profile']);
        this.dialog.closeAll();
    }

}