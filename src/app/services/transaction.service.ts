import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from "../../../src/app/services/base-service.service";

@Injectable({
    providedIn: 'root'
})
export class TransactionService {

    constructor(
        private httpClient: HttpClient,
        private baseService: BaseService
    ) { }

    list_transactions = `${this.baseService.baseUrl}transactions`;
    transaction_by_id = `${this.baseService.baseUrl}transaction-by-id`;


    GetTransactionList() {
        return this.httpClient.get(this.list_transactions, { headers: this.baseService.getAuthHeaders() });
    }  

    GetTransactionById(id_transaction) {
        return this.httpClient.get(`${this.transaction_by_id}/${id_transaction}`, { headers: this.baseService.getAuthHeaders() });
    }

}
