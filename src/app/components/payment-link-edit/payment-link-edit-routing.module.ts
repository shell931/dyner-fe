import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentLinkEditComponent } from './payment-link-edit/payment-link-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', title:"Dyner - Link de pago",
                component: PaymentLinkEditComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes), HttpClientModule, FormsModule],
    exports: [RouterModule],
})
export class PaymentLinkEditRoutingModule { }
