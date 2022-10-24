import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BalanceWithdrawalComponent } from './balance-withdrawal/balance-withdrawal.component';
import { BalanceWithdrawalRoutingModule } from './balance-withdrawal-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsMapModule } from 'angular-us-map';

 

@NgModule({
  // declarations: [BalanceWithdrawalComponent],
  imports: [
    CommonModule,
    BalanceWithdrawalRoutingModule,
    NgApexchartsModule,
    NgbModule,
    UsMapModule
  ]
})
export class BalanceWithdrawalModule { }




