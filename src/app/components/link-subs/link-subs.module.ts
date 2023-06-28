import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkSubsRoutingModule } from './link-subs-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UsMapModule } from 'angular-us-map';
import { MatTableModule } from '@angular/material/table'
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';


@NgModule({

  imports: [
    CommonModule,
    LinkSubsRoutingModule,
    NgApexchartsModule,
    NgbModule,
    UsMapModule,
    FormsModule,
    MatTableModule,
    MaterialModuleModule
  ]
})
export class LinkSubsModule { }
