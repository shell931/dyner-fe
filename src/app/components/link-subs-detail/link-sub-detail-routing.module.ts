import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkDetailSubComponent } from './link-subs-detail/link-sub-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Dyner - Subscription detail",
                component: LinkDetailSubComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes), HttpClientModule, FormsModule],
    exports: [RouterModule],
})
export class LinkDetailSubRoutingModule { }
