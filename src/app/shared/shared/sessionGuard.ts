import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()

export class SessionGuard {

  constructor(private _ro: Router) {}

  canActivate() {
    if (localStorage.getItem('access_token')){
    	return true;
    }
    this._ro.navigate(['/']);
    return false;
  }
}