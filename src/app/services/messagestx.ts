import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';


@Injectable({
  providedIn: 'root',
})
export class  MessagesTxService {
  constructor(
    private httpClient: HttpClient,
    private baseService: BaseService
  ) {}

  list_messagestx = `${this.baseService.baseUrl}readmessagestx`;

  GetMessagesTxList(id: any) {
    return this.httpClient.get(`${this.list_messagestx}/${id}`, { headers: this.baseService.getAuthHeaders() });
}
}
