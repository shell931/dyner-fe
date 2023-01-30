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
import { AttachmentsFormComponent } from './components/profile/attachments-form/attachments-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { BalanceWithdrawalResponseComponent } from './components/balance-withdrawal-response/balance-withdrawal-response/balance-withdrawal-response.component';
import { PaymentLinkCreateComponent } from './components/payment-link-create/payment-link-create/payment-link-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PaymentLinkEditComponent } from './components/payment-link-edit/payment-link-edit/payment-link-edit.component';
import { PaymentLinkDetailComponent } from './components/payment-link-detail/payment-link-detail/payment-link-detail.component';
import { MatRadioModule } from '@angular/material/radio';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail/transaction-detail.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { LottieModule } from "ngx-lottie";
import { RegisterModule } from './register/register.module';
import player from "lottie-web";
import { MatDialogModule } from '@angular/material/dialog';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    BalanceWithdrawalComponent,
    TransactionHistoryComponent,
    WithdrawalHistoryComponent,
    DatafonoDigitalComponent,
    PaymentLinkComponent,
    BalanceWithdrawalResponseComponent,
    PaymentLinkCreateComponent,
    PaymentLinkEditComponent,
    PaymentLinkDetailComponent,
    TransactionDetailComponent,
    ProfileComponent,
    AttachmentsFormComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    OverlayModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    DropzoneModule,
    NgxDropzoneModule,
    MatDatepickerModule,
    MatRadioModule,
    NgxQRCodeModule,
    RegisterModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    ColorPickerService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
