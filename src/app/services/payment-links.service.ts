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

    list_links = `${this.baseService.baseUrl}links`;

    GetLinksList() {
        return this.httpClient.get(this.list_links, { headers: this.baseService.getAuthHeaders() });
    }
}
