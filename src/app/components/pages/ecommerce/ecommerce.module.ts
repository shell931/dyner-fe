import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckOutComponent,
    WishListComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    NgbModule,
    NgSelectModule,
    ArchwizardModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  providers:[
    ToastrService
  ]
})
export class EcommerceModule { }
