import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: 'shop', title:"Valex - Shop",
              component: ShopComponent
          },
          {
              path: 'product-details', title:"Valex - Product Details",
              component: ProductDetailsComponent
          },
          {
              path: 'cart', title:"Valex - Cart",
              component: CartComponent
          },
          {
              path: 'check-out', title:"Valex - Check Out",
              component: CheckOutComponent
          },
          {
              path: 'wish-list', title:"Valex - Wish List",
              component: WishListComponent
          }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
