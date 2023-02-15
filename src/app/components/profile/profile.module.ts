import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsMapModule } from 'angular-us-map';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { ProfileService } from 'src/app/services/profile.service';
import { MemberShipService } from 'src/app/services/membership.services';
import { ProfileComponent } from './profile/profile.component';
import { AttachmentsFormComponent } from './attachments-form/attachments-form.component';
import { DocumentStatusComponent } from './document-status/document-status.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from 'ngx-dropzone';


 

@NgModule({
  declarations: [
    // TransactionHistoryComponent
    ProfileComponent,
    AttachmentsFormComponent,
    DocumentStatusComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    NgApexchartsModule,
    NgbModule,
    UsMapModule,
    DropzoneModule,
    NgxDropzoneModule
  ],
  providers: [CommonService, AlertsService, ProfileService, MemberShipService]
 
})
export class ProfileModule { }
