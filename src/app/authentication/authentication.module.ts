import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { MaterialModuleModule } from '../material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';
import { ToastrModule } from 'ngx-toastr';
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    ToastrModule.forRoot(), 
    LottieModule.forRoot({ player: playerFactory })
  ]
})
export class AuthenticationModule { }
