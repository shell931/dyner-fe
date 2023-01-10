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


 

@NgModule({
  declarations: [
    // TransactionHistoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    NgApexchartsModule,
    NgbModule,
    UsMapModule,
  ],
  providers: [CommonService, AlertsService, ProfileService, MemberShipService]
 
})
export class ProfileModule { }
