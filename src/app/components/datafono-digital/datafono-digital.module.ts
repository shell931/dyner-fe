import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DatafonoDigitalComponent } from './datafono-digital/datafono-digital.component';
import { DatafonoDigitalRoutingModule } from './datafono-digital-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsMapModule } from 'angular-us-map';

 

@NgModule({
  // declarations: [DatafonoDigitalComponent],
  imports: [
    CommonModule,
    DatafonoDigitalRoutingModule,
    NgApexchartsModule,
    NgbModule,
    UsMapModule
  ]
})
export class DatafonoDigitalModule { }
