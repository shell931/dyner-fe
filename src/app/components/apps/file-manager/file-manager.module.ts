import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileManagerListComponent } from './file-manager-list/file-manager-list.component';
import { FileManagerDetailsComponent } from './file-manager-details/file-manager-details.component';
import { FileAttachmentsComponent } from './file-attachments/file-attachments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';




@NgModule({
  declarations: [
    FileManagerComponent,
    FileManagerListComponent,
    FileManagerDetailsComponent,
    FileAttachmentsComponent
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    NgbModule,
    CarouselModule,
    GalleryModule.withConfig({
      // thumbView: 'contain',
    }),
    LightboxModule,
  ]
})
export class FileManagerModule { }
