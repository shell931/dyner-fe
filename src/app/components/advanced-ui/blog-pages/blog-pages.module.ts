import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPagesRoutingModule } from './blog-pages-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgSelectModule } from '@ng-select/ng-select';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailsComponent,
    BlogEditComponent
  ],
  imports: [
    CommonModule,
    BlogPagesRoutingModule,
    NgbModule,
    NgSelectModule,
    NgxDropzoneModule,
    GalleryModule.withConfig({
      // thumbView: 'contain',
    }),
    LightboxModule,
    QuillModule.forRoot()
  ]
})
export class BlogPagesModule { }
