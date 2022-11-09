import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransactionDetailRoutingModule } from './transaction-detail-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsMapModule } from 'angular-us-map';

 

@NgModule({
  // declarations: [TransactionHistoryComponent],
  imports: [
    CommonModule,
    TransactionDetailRoutingModule,
    NgApexchartsModule,
    NgbModule,
    UsMapModule
  ]
})
export class TransactionDetailModule { }
