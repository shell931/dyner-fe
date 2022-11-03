import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentLinkCreateRoutingModule } from './payment-link-create-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsMapModule } from 'angular-us-map';
import { MatTableModule } from '@angular/material/table'  
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatDatepickerModule} from '@angular/material/datepicker';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   acceptedFiles: 'image/*',
  createImageThumbnails: true
 };


@NgModule({
  imports: [
    CommonModule,
    PaymentLinkCreateRoutingModule,
    NgApexchartsModule,
    NgbModule,
    UsMapModule, 
    FormsModule,
    MatTableModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    DropzoneModule,
    NgxDropzoneModule
  ]
})
export class PaymentLinkCreateModule { }
