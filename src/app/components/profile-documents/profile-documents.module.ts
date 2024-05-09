import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ProfileRoutingModule } from './profile-documents-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsMapModule } from 'angular-us-map';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { ProfileService } from 'src/app/services/profile.service';
import { MemberShipService } from 'src/app/services/membership.services';

import { ProfileDocumentsComponent } from './profile-documents/profile-documents.component';
import { DocumentStatusComponent } from './document-status/document-status.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // TransactionHistoryComponent

    ProfileDocumentsComponent,
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
    NgxDropzoneModule,
    FormsModule
  ],
  providers: [CommonService, AlertsService, ProfileService, MemberShipService]

})
export class ProfileDocumentsModule { }
