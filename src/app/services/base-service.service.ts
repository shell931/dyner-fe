import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class BaseService {

    baseUrl = environment.api.baseUrl;
    baseAuthUrl = environment.api.baseAuthUrl;

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    constructor(
        private httpClient: HttpClient,
        private router: Router,
    ) { }


    GetErrorAuthSesion(error) {
        let myJSONError = JSON.stringify(error);
        let Error = JSON.parse(myJSONError);
        let status = Error.status;
        if (status == 401) {
            localStorage.removeItem('access_token');
            this.router.navigate(['/login']).then(() => {
                window.location.reload();
            });;
        }
    }

    getAuthHeaders() {
        const token = localStorage.getItem('access_token');
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        });
    }

    getAuthHeadersToFormData() {
        const token = localStorage.getItem('access_token');
        return new HttpHeaders({
            // 'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`

        });
    }

}






