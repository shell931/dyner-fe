import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexComponent } from './apex/apex.component';
import { ChartlistComponent } from './chartlist/chartlist.component';
import { EchartsComponent } from './echarts/echarts.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartRoutingModule } from './charts-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';



@NgModule({
  declarations: [ApexComponent, ChartlistComponent, EchartsComponent, ChartjsComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    NgbModule,
    NgApexchartsModule,
    NgChartsModule ,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ChartistModule

  ]
})
export class ChartModule { }
