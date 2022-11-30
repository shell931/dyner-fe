import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { BaseService } from "src/app/services/base-service.service";
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { AnimationOptions, LottieTransferState } from 'ngx-lottie';
import { environment } from 'src/environments/environment';


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
    gatewayUrl = environment.api.gatewayUrl+'pay/';
    public validate_copy: boolean = false;

    constructor(
        private baseService: BaseService,
        private profileService: ProfileService,
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
        this.url_data_web = this.gatewayUrl+ProfileData.data.user.client.url_data_web;
        console.log(this.url_data_web);

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


}
