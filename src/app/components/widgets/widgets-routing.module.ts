import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WidgetsComponent } from "./widgets/widgets.component";


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Valex - Widgets",
                component: WidgetsComponent
            },
   
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WidgetsRoutingModule { }