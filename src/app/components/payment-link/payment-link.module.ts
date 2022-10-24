import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PaymentLinkComponent } from './payment-link/payment-link.component';
import { PaymentLinkRoutingModule } from './payment-link-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UsMapModule } from 'angular-us-map';
import { MatTableModule } from '@angular/material/table'  
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
 

@NgModule({
  // declarations: [PaymentLinkComponent],
  imports: [
    CommonModule,
    PaymentLinkRoutingModule,
    NgApexchartsModule,
    NgbModule,
    UsMapModule, 
    FormsModule,
    MatTableModule,
    MaterialModuleModule
  ]
})
export class PaymentLinkModule { }
