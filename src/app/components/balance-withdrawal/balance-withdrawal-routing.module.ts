import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceWithdrawalComponent } from './balance-withdrawal/balance-withdrawal.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Dyner24 - Retiros",
                component: BalanceWithdrawalComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BalanceWithdrawalRoutingModule { }
