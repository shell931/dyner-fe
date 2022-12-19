import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { BusinessInformationFormComponent } from './components/business-information-form/business-information-form.component';
import { DescribeBusinessFormComponent } from './components/describe-business-form/describe-business-form.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { LegalRepresentativeFormComponent } from './components/legal-representative-form/legal-representative-form.component';
import { AttachmentsFormComponent } from './components/attachments-form/attachments-form.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../services/common.service';

@NgModule({
  declarations: [
    BusinessInformationFormComponent,
    DescribeBusinessFormComponent,
    AddressFormComponent,
    LegalRepresentativeFormComponent,
    AttachmentsFormComponent,
    WizardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterRoutingModule
  ],
  providers: [CommonService]
})
export class RegisterModule { }
