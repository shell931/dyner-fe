import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceWithdrawalResponseComponent } from './balance-withdrawal-response/balance-withdrawal-response.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Valex - Dashboard",
                component: BalanceWithdrawalResponseComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BalanceWithdrawalResponseRoutingModule { }
