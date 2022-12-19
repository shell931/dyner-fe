import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from "../../../src/app/services/base-service.service";
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  public identificationTypesUrl = `${this.baseService.baseUrl}identification-types`;
  public economityActivitiesUrl = `${this.baseService.baseUrl}economity-activities`;

  constructor(
    private httpClient: HttpClient,
    private baseService: BaseService
  ) { }

  /**
   * Get identification types list
   * @returns 
   */
  public async getIdentificationTypes() {
    return await firstValueFrom(this.httpClient.get(`${this.identificationTypesUrl}`, { headers: this.headers }).pipe(
      map(response => this.adapterDocumentTypes(response))
    ));
  }

  /**
   * Get Economity Activities list
   * @returns 
   */
  public async getEconomityActivities() {
    return await firstValueFrom(this.httpClient.get(`${this.economityActivitiesUrl}`, { headers: this.headers }).pipe(
      map(response => this.adapterEconomityActivities(response))
    ));
  }

  private adapterDocumentTypes(response: any): any {
    const documentTypes: any[] = [];
    response?.data?.forEach(item => {
      documentTypes.push({
        id: item.id,
        description: `${item.descripcion} - ${item.alias}`
      })
    });
    return documentTypes;
  }

  private adapterEconomityActivities(response: any): any {
    const documentTypes: any[] = [];
    response?.data?.forEach(item => {
      documentTypes.push({
        id: item.id,
        description: item.description
      })
    });
    return documentTypes;
  }

}
