import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from "../../../src/app/services/base-service.service";

@Injectable({
    providedIn: 'root'
})
export class DinamicFormService {

    constructor(
        private httpClient: HttpClient,
        private baseService: BaseService
    ) { }
    
    create_dynamic_form = `${this.baseService.baseUrl}dynamic-forms`;

    CreateDynamicForm(wData) {
        const body = JSON.stringify(wData);
        return this.httpClient.post(`${this.create_dynamic_form}`, body, { headers: this.baseService.getAuthHeaders() });
    }

    GetDynamicFormById(id) {
        return this.httpClient.get(`${this.create_dynamic_form}/${id}`, { headers: this.baseService.getAuthHeaders() });
    }
}
