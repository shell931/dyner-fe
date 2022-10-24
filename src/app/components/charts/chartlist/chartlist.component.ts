import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/charts/chartlist'

@Component({
  selector: 'app-chartlist',
  templateUrl: './chartlist.component.html',
  styleUrls: ['./chartlist.component.scss']
})
export class ChartlistComponent implements OnInit {

    // Charts
    public chart1:any = chartData.chart1;
    public chart2:any = chartData.chart2;
    public chart3:any = chartData.chart3;
    public chart4:any = chartData.chart4;
    public chart5:any = chartData.chart5;
    public chart6:any = chartData.chart6;
    public chart7:any = chartData.chart7;
    public chart8:any = chartData.chart8;
    public chart9:any = chartData.chart9;
    public chart10:any = chartData.chart10;
    public chart11:any = chartData.chart11;

  constructor() { }

  ngOnInit(): void {
  }

}
