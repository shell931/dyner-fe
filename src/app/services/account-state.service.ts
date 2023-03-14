import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from "../../../src/app/services/base-service.service";


@Injectable({
    providedIn: 'root'
})
export class AccountStateService {


    constructor(
        private httpClient: HttpClient,
        private baseService: BaseService
    ) { }


    all_transfers_balance = `${this.baseService.baseUrl}all-transfers-balance`;
    payment_link_transfers_balance = `${this.baseService.baseUrl}links-transfers-balance`;
    payment_buttons_transfers_balance = `${this.baseService.baseUrl}all-transfers-balance`;
    total_sum_transactions = `${this.baseService.baseUrl}total-sum-transactions`;


    GetAllTransferBalance() {
        return this.httpClient.get(this.all_transfers_balance, { headers: this.baseService.getAuthHeaders() });
    }

    GetTotalSumTransactions() {
        return this.httpClient.get(this.total_sum_transactions, { headers: this.baseService.getAuthHeaders() });
    }



}
