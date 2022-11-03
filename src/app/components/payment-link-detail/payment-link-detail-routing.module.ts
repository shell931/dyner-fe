import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentLinkDetailComponent } from './payment-link-detail/payment-link-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"link detail",
                component: PaymentLinkDetailComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes), HttpClientModule, FormsModule],
    exports: [RouterModule],
})
export class PaymentLinkDetailRoutingModule { }
