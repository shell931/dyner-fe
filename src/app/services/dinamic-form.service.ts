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

}
