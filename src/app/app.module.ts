import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay'
import { ColorPickerService } from 'ngx-color-picker';
import { HttpClientModule } from '@angular/common/http';
import { BalanceWithdrawalComponent } from './components/balance-withdrawal/balance-withdrawal/balance-withdrawal.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history/transaction-history.component';
import { WithdrawalHistoryComponent } from './components/withdrawal-history/withdrawal-history/withdrawal-history.component';
import { DatafonoDigitalComponent } from './components/datafono-digital/datafono-digital/datafono-digital.component';
import { PaymentLinkComponent } from './components/payment-link/payment-link/payment-link.component';
import { FormsModule } from '@angular/forms'; 
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { BalanceWithdrawalResponseComponent } from './components/balance-withdrawal-response/balance-withdrawal-response/balance-withdrawal-response.component';



@NgModule({
  declarations: [
    AppComponent,
    BalanceWithdrawalComponent,
    TransactionHistoryComponent,
    WithdrawalHistoryComponent,
    DatafonoDigitalComponent,
    PaymentLinkComponent,
    BalanceWithdrawalResponseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule, 
    OverlayModule,
    HttpClientModule, 
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
  ],  
  providers: [ 
    
    ColorPickerService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
