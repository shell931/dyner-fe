import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceWithdrawalResponseRoutingModule } from './balance-withdrawal-response-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsMapModule } from 'angular-us-map';

@NgModule({
  imports: [
    CommonModule,
    BalanceWithdrawalResponseRoutingModule,
    NgApexchartsModule,
    NgbModule,
    UsMapModule
  ]
})
export class BalanceWithdrawalResponseModule { }




