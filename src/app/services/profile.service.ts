import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from "../../../src/app/services/base-service.service";
import { environment } from '../../../src/environments/environment';
import { Observable } from 'rxjs';

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
    status_document_client = `${this.baseService.baseUrl}status-document-client`;

    GetProfileData() {
        let body = {}
        return this.httpClient.post(`${this.baseProfileUrl}`, body, { headers: this.baseService.getAuthHeaders() });
    }

    UpdateAvatar(requestData) {
        return this.httpClient.post<any>(`${this.profile_avatar}`, requestData, {  headers: this.baseService.getAuthHeadersToFormData() });
    }

    GetStatusDocumentClient() {
        return this.httpClient.get<any>(this.status_document_client, { headers: this.baseService.getAuthHeaders() });
    }

}
