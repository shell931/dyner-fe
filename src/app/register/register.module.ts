import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { BusinessInformationFormComponent } from './components/business-information-form/business-information-form.component';
import { DescribeBusinessFormComponent } from './components/describe-business-form/describe-business-form.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { LegalRepresentativeFormComponent } from './components/legal-representative-form/legal-representative-form.component';
import { UserAccessFormComponent } from './components/user-access-form/user-access-form.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { AlertsService } from '../services/alerts.service';
import { InputMaskModule } from '@ngneat/input-mask';
import { SuccessRegisterComponent } from './components/success-register/success-register.component';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
    BusinessInformationFormComponent,
    DescribeBusinessFormComponent,
    AddressFormComponent,
    LegalRepresentativeFormComponent,
    WizardComponent,
    UserAccessFormComponent,
    SuccessRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    InputMaskModule,
    CurrencyMaskModule,
  ],
  providers: [CommonService, AlertsService]
})
export class RegisterModule { }
