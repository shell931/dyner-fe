import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardsComponent } from './form-wizards/form-wizards.component';
import { FormEditorsComponent } from './wysiwyg-editors/wysiwyg-editors.component';
import { FormRoutingModule } from './form-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DpDatePickerModule} from 'ng2-date-picker';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { QuillModule } from 'ngx-quill';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

import { ArchwizardModule } from 'angular-archwizard';
import { FormSizesComponent } from './form-sizes/form-sizes.component';
import { BasicContentComponent } from './form-wizards/basic-content/basic-content.component';
import {MatStepperModule} from '@angular/material/stepper';
import {Ng2TelInputModule} from 'ng2-tel-input';



const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   acceptedFiles: 'image/*',
  createImageThumbnails: true
 };


@NgModule({
  declarations: [AdvancedFormComponent, FormElementsComponent, FormLayoutsComponent, FormValidationComponent, FormWizardsComponent, FormEditorsComponent, FormSizesComponent, BasicContentComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    NgxDaterangepickerMd.forRoot(),
    DpDatePickerModule,
    NgSelectModule,
    AngularMultiSelectModule,
    NgxIntlTelInputModule,
    QuillModule.forRoot(),
    AngularEditorModule,
    HttpClientModule,
    DropzoneModule,
    NgxDropzoneModule,
    ArchwizardModule,
    MatStepperModule,
    Ng2TelInputModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000
      }
    ),
  ],

  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    ToastrService
    
  ],


  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule { }
