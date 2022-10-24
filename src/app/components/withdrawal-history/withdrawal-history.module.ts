import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { WithdrawalHistoryComponent } from './withdrawal-history/withdrawal-history.component';
import { WithdrawalHistoryRoutingModule } from './withdrawal-history-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsMapModule } from 'angular-us-map';

 

@NgModule({
  // declarations: [WithdrawalHistoryComponent],
  imports: [
    CommonModule,
    WithdrawalHistoryRoutingModule,
    NgApexchartsModule,
    NgbModule,
    UsMapModule
  ]
})
export class WithdrawalHistoryModule { }
