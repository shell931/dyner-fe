import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from "../../../src/app/services/base-service.service";

@Injectable({
    providedIn: 'root'
})
export class WithdrawalService {

    constructor(
        private httpClient: HttpClient,
        private baseService: BaseService
    ) { }

    create_withdrawal = `${this.baseService.baseUrl}all-transfers-balance`;
    get_withdrawal_list = `${this.baseService.baseUrl}paymentbuttons-transfers`;

    CreateWithdrawal(wData) {
        console.log(wData);
        const body = JSON.stringify(wData);
        return this.httpClient.post(`${this.create_withdrawal}`, body, {  headers: this.baseService.getAuthHeaders() });
    }

    GetWithdrawalList() {
        return this.httpClient.get(this.get_withdrawal_list, { headers: this.baseService.getAuthHeaders() });
    }  
}
