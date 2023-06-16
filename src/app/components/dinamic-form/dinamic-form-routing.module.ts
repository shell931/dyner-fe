import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DinamicFormComponent } from './dinamic-form/dinamic-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Dyner - Dinamic-Form",
                component: DinamicFormComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes), HttpClientModule, FormsModule],
    exports: [RouterModule],
})
export class DinamicFormRoutingModule { }
