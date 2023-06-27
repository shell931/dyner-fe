import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkSubsComponent} from './link-subs/link-subs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Dyner24 - Link de suscripción",
                component:LinkSubsComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes), HttpClientModule, FormsModule],
    exports: [RouterModule],
})
export class LinkSubsRoutingModule { }
