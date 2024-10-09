import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransactionHistoryRoutingModule } from './transaction-history-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsMapModule } from 'angular-us-map';

import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  // declarations: [TransactionHistoryComponent],
  imports: [
    CommonModule,
    TransactionHistoryRoutingModule,
    NgApexchartsModule,
    NgbModule,
    UsMapModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule,
  ],
})
export class TransactionHistoryModule { }
