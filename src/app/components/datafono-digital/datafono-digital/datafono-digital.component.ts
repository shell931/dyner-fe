import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { BaseService } from "src/app/services/base-service.service";

@Component({
    selector: 'app-datafono-digital',
    templateUrl: './datafono-digital.component.html',
    styleUrls: ['./datafono-digital.component.scss']
})
export class DatafonoDigitalComponent implements OnInit {

    url_data_web: any;

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
        this.url_data_web = ProfileData.data.user.client.url_data_web;
        console.log(this.url_data_web);
        
    }

    copyInputMessage(inputElement) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
    }

}
