import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from "../../../src/app/services/base-service.service";
import { environment } from '../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ProfileService {

    baseProfileUrl = environment.api.baseProfileUrl;

    constructor(
        private httpClient: HttpClient,
        private baseService: BaseService
    ) { }

    GetProfileData() {
        let body = {}
        return this.httpClient.post(`${this.baseProfileUrl}`, body, { headers: this.baseService.getAuthHeaders() });
    }
}
