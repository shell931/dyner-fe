import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from "../../../src/app/services/base-service.service";

@Injectable({
    providedIn: 'root'
})
export class LinksSubsService {

    constructor(
        private httpClient: HttpClient,
        private baseService: BaseService
    ) { }

    base_links_url = `${this.baseService.baseUrl}links-suscripcion`;

    GetLinksSubsList() {
        return this.httpClient.get(this.base_links_url, { headers: this.baseService.getAuthHeaders()});
    }

    GetLinkSubsById(id_linksub) {
        return this.httpClient.get(`${this.base_links_url}/${id_linksub}`, { headers: this.baseService.getAuthHeaders() });
    }

    CreateSubsLink(requestData) {
        return this.httpClient.post<any>(`${this.base_links_url}`, requestData, {  headers: this.baseService.getAuthHeadersToFormData() });
    }

    UpdateSubsLink(requestData, id_linksub) {
        return this.httpClient.post<any>(`${this.base_links_url}/${id_linksub}`, requestData, {  headers: this.baseService.getAuthHeadersToFormData() });
    }

    DeleteSubsLink(id_linksub) {
        return this.httpClient.delete<any>(`${this.base_links_url}/${id_linksub}`, {  headers: this.baseService.getAuthHeadersToFormData() });
    }



}
