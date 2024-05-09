import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from "../../../src/app/services/base-service.service";
import { environment } from '../../../src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    methods_payment_active = `${this.baseService.baseUrl}get-method-payments-active`;
    update_methods_payment = `${this.baseService.baseUrl}update-method-payments-client`;

    GetProfileData() {
        let body = {}
        return this.httpClient.post(`${this.baseProfileUrl}`, body, { headers: this.baseService.getAuthHeaders() });
    }

    UpdateAvatar(requestData) {
        return this.httpClient.post<any>(`${this.profile_avatar}`, requestData, { headers: this.baseService.getAuthHeadersToFormData() });
    }

    GetStatusDocumentClient() {
        return this.httpClient.get<any>(this.status_document_client, { headers: this.baseService.getAuthHeaders() });
    }

    getPaymentMethodsActive(): Observable<any[]> {
        return this.httpClient.get<{ success: boolean, data: any[] }>(this.methods_payment_active, { headers: this.baseService.getAuthHeaders() })
            .pipe(
                map(response => response.data) // Extracción de la parte 'data' del objeto
            );
    }

    updateMethodPaymentsClient(wData) {
        console.log(wData);
        const body = JSON.stringify(wData);
        return this.httpClient.post(`${this.update_methods_payment}`, body, { headers: this.baseService.getAuthHeaders() });
    }

}
