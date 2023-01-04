import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from "../../../src/app/services/base-service.service";
import { firstValueFrom, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MemberShipService {

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    constructor(
        private httpClient: HttpClient,
        private baseService: BaseService
    ) { }

    recover_password = `${this.baseService.baseAuthUrl}recover`;
    login = `${this.baseService.baseAuthUrl}login`;
    membershipUrl = `${this.baseService.baseUrl}membership`;
    uploadFileUrl = `${this.baseService.baseUrl}upload-file`;

    /*  loginUser(authData) {
         const body = JSON.stringify(authData);
         return this.httpClient.post(`${this.login}`, body, { headers: this.headers });
     }
 
     RecoverPassword(rData) {
         const body = JSON.stringify(rData);
         return this.httpClient.post(`${this.recover_password}`, body, { headers: this.headers });
     } */

    /**
     * Store register data
     * @returns 
    */
    public async storeMembershipService(data) {
        return await firstValueFrom(this.httpClient.post(`${this.membershipUrl}`, data, { headers: this.headers }).pipe(
            map(response => this.adapterResponseRequest(response))
        ));
    }

    /**
     * Store register data
     * @returns 
    */
    public async uploadFileUserService(formData) {
        return await firstValueFrom(this.httpClient.post(`${this.uploadFileUrl}`, formData, { headers: this.baseService.getAuthHeadersToFormData() }).pipe(
            map(response => this.adapterResponseRequest(response))
        ));
    }

    private adapterResponseRequest(response: any): any {
        return {
            ...response,
            statusCode: response?.status_code,
        };
    }

}
