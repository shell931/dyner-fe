import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountStateComponent } from './account-state/account-state.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Dyner - Account State",
                component: AccountStateComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountStateRoutingModule { }
