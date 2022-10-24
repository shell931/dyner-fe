import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountStateComponent } from './account-state/account-state.component';
import { AccountStateRoutingModule } from './account-state-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsMapModule } from 'angular-us-map';

 

@NgModule({
  declarations: [AccountStateComponent],
  imports: [
    CommonModule,
    AccountStateRoutingModule,
    NgApexchartsModule,
    NgbModule,
    UsMapModule
  ]
})
export class AccountStateModule { }
