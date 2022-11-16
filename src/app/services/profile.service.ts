import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from "../../../src/app/services/base-service.service";
import { environment } from '../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ProfileService {


    constructor(
        private httpClient: HttpClient,
        private baseService: BaseService
    ) { }

    baseProfileUrl = environment.api.baseProfileUrl;
    profile_avatar = `${this.baseService.baseUrl}profile-avatar`;

    GetProfileData() {
        let body = {}
        return this.httpClient.post(`${this.baseProfileUrl}`, body, { headers: this.baseService.getAuthHeaders() });
    }

    UpdateAvatar(requestData) {
        return this.httpClient.post<any>(`${this.profile_avatar}`, requestData, {  headers: this.baseService.getAuthHeadersToFormData() });
    }
}
