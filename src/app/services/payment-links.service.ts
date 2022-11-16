import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from "../../../src/app/services/base-service.service";

@Injectable({
    providedIn: 'root'
})
export class PaymentLinksService {

    constructor(
        private httpClient: HttpClient,
        private baseService: BaseService
    ) { }

    base_links_url = `${this.baseService.baseUrl}links`;

    GetLinksList() {
        return this.httpClient.get(this.base_links_url, { headers: this.baseService.getAuthHeaders() });
    }

    GetLinkById(id_link) {
        return this.httpClient.get(`${this.base_links_url}/${id_link}`, { headers: this.baseService.getAuthHeaders() });
    }

    CreateLink(requestData) {
        return this.httpClient.post<any>(`${this.base_links_url}`, requestData, {  headers: this.baseService.getAuthHeadersToFormData() });
    }

    UpdateLink(requestData, id_link) {
        return this.httpClient.post<any>(`${this.base_links_url}/${id_link}`, requestData, {  headers: this.baseService.getAuthHeadersToFormData() });
    }

  

}
