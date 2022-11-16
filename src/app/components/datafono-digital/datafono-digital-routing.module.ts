import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatafonoDigitalComponent } from './datafono-digital/datafono-digital.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Dyner24 - Datafono Digital",
                component: DatafonoDigitalComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DatafonoDigitalRoutingModule { }
