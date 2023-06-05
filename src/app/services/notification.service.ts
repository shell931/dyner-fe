import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(
    private httpClient: HttpClient,
    private baseService: BaseService
  ) {}

  public getAllNotificationsService() {
    const headers: HttpHeaders = this.baseService.getAuthHeaders();
    return this.httpClient
      .get<any>(`${this.baseService.baseUrl}showmessagelist`, {
        headers,
      }).pipe(map((response) => response.data));
  }

  public getNotReadNotificationsService() {
    const headers: HttpHeaders = this.baseService.getAuthHeaders();
    return this.httpClient
      .get<any>(`${this.baseService.baseUrl}messagenoreadlist`, {
        headers,
      }).pipe(map((response) => response.data));
  }

  public readMessageService(id: number) {
    const headers: HttpHeaders = this.baseService.getAuthHeaders();
    return this.httpClient
      .get<any>(`${this.baseService.baseUrl}showandupdatemessage/${id}`, {
        headers,
      }).pipe(map((response) => response.data));
  }
}
