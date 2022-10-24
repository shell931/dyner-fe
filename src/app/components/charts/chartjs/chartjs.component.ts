import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Line Chart
  public lineChartOptions = chartData.lineChartOptions
  public lineChartType = chartData.lineChartType
  public lineChartData = chartData.lineChartData


  // Bar Chart 1
  public barChartData = chartData.barChartData;
  public barChartOptions = chartData.barChartOptions;
  public barChartPlugins = chartData.barChartPlugins;
  public barChartType = chartData.barChartType;
  
  //Bar Chart 2
  public barChart2Data = chartData.barChart2Data;
  public barChart2Options = chartData.barChart2Options;
  public barChart2Type = chartData.barChart2Type;
  public barChart2Legend = chartData.barChart2Legend;
  public barChart2Plugins = chartData.barChart2Plugins;

  //Area Chart
  public AreaChartData = chartData.AreaChartData;
  public AreaChartOptions = chartData.AreaChartOptions;
  public AreaChartType = chartData.AreaChartType;
  
  //Doughnut and Pie Chart Data
  public PieChartData = chartData.PieChartData;
  public PieChartOptions = chartData.PieChartOptions;
  public PieChartType = chartData.PieChartType;
  public DoughnutChartType = chartData.DoughnutChartType;
  
  //Radar Chart
  public radarChartData = chartData.radarChartData;
  public radarChartOptions = chartData.radarChartOptions;
  public radarChartType = chartData.radarChartType;

  //Polar Chart
  public polarChartData = chartData.polarChartData;
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartType = chartData.polarChartType;


  //solid Color1
  public solidColorData = chartData.solidColorData;
  public solidColorOptions = chartData.solidColor;
  public solidColorPlugins = chartData.solidColorPlugins;
  public solidColorType = chartData.solidColorType;
  
  //solid Color2
  public solidColorData2 = chartData.solidColorData2;
  public solidColorOptions2 = chartData.solidColor2;
  public solidColorPlugins2 = chartData.solidColorPlugins2;
  public solidColorType2 = chartData.solidColorType2;

   //solid Color3
   public solidColorData3 = chartData.solidColorData3;
   public solidColorOptions3 = chartData.solidColor3;
   public solidColorPlugins3 = chartData.solidColorPlugins3;
   public solidColorType3 = chartData.solidColorType3;
  
}
