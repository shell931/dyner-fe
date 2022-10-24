import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApexComponent } from "./apex/apex.component";
import { ChartjsComponent } from "./chartjs/chartjs.component";
import { ChartlistComponent } from "./chartlist/chartlist.component";
import { EchartsComponent } from "./echarts/echarts.component";

const routes: Routes = [
    {
        path: '',
        children:  [
            {
                path: 'apex', title:"Valex - Apex",
                component: ApexComponent
            },
            {
                path: 'chartjs', title:"Valex - Chartjs",
                component: ChartjsComponent
            },
            {
                path: 'chartlist', title:"Valex - Chartlist",
                component: ChartlistComponent
            },
            {
                path: 'echarts', title:"Valex - Echarts",
                component: EchartsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartRoutingModule {}