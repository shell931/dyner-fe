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

    list_transactions = `${this.baseService.baseUrl}transactions-paginate`;
    transaction_by_id = `${this.baseService.baseUrl}transaction-by-id`;

    GetTransactionList(currentPage, searchItem) {
        return this.httpClient.get(`${this.list_transactions}/${currentPage}/${searchItem}`, { headers: this.baseService.getAuthHeaders() });
    }

    GetTransactionById(id_transaction, service_type) {
        return this.httpClient.get(`${this.transaction_by_id}/${id_transaction}/${service_type}`, { headers: this.baseService.getAuthHeaders() });
    }

}
