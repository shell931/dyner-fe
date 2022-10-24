import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/charts/apex_chart';

@Component({
  selector: 'app-apex',
  templateUrl: './apex.component.html',
  styleUrls: ['./apex.component.scss']
})
export class ApexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public RandomData:any = chartData.ApexRandomData;
  public apexData:any = chartData.ApexChartData;
  public barData:any = chartData.BarData;
  public stackedbarData:any = chartData.StackedBarData;
  public donutData:any = chartData.DonutChartData;
  public pieData:any = chartData.PieChartData;
  public radicalbarData:any = chartData.RadialBarCircleData;
  public radicalmultipleData:any = chartData.RadialBarCircleMultipleData;


}
