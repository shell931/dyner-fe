import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkSubEditComponent } from './link-sub-edit/link-sub-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Dyner24 - Link de Sucripciones",
                component: LinkSubEditComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes), HttpClientModule, FormsModule],
    exports: [RouterModule],
})
export class LinkSubEditRoutingModule { }
