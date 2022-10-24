import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LeafletmapsComponent } from "./leafletmaps/leafletmaps.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'leafletmaps', title:"Valex - Leaflet Maps",
                component: LeafletmapsComponent
            }
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MapsRoutingModule { }