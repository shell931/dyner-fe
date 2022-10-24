import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentLinkComponent } from './payment-link/payment-link.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Valex - Dashboard",
                component: PaymentLinkComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes), HttpClientModule, FormsModule],
    exports: [RouterModule],
})
export class PaymentLinkRoutingModule { }
