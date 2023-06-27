import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LinkSubsCreateComponent } from './link-subs-create/link-subs-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Dyner24 - Link de suscripcion",
                component: LinkSubsCreateComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes), HttpClientModule, FormsModule],
    exports: [RouterModule],
})
export class LinkSubCreateRoutingModule { }
