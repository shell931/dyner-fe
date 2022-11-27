import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from "../../../src/app/services/base-service.service";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    constructor(
        private httpClient: HttpClient,
        private baseService: BaseService
    ) { }

    recover_password = `${this.baseService.baseAuthUrl}recover`;
    login = `${this.baseService.baseAuthUrl}login`;

    loginUser(authData) {
        const body = JSON.stringify(authData);
        return this.httpClient.post(`${this.login}`, body, { headers: this.headers });
    }

    RecoverPassword(rData) {
        const body = JSON.stringify(rData);
        return this.httpClient.post(`${this.recover_password}`, body, { headers: this.headers });
    }

}
