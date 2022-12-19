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
  public departmentsUrl = `${this.baseService.baseUrl2}departments`;

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

  /**
   * Get Departments list
   * @returns 
   */
  public async getDepartments() {
    return await firstValueFrom(this.httpClient.get(`${this.departmentsUrl}`, { headers: this.headers }).pipe(
      map(response => this.adapterDepartments(response))
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

  private adapterDepartments(response: any): any {
    const departments: any[] = [];
    response?.forEach(item => {
      departments.push({
        id: item.id_departamento,
        description: item.departamento
      })
    });
    return departments;
  }

}
