import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { AngularMaterialModule } from '../angular-material/angular-material.module';

// Search Pipe
// import { SearchProductsPipe } from '../shared/pipe/products/search-products.pipe';

// shared
import { SharedModule } from '../shared/shared.module';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
@NgModule({
  declarations: [
    CartListComponent,
    // SearchProductsPipe,
    CartProductComponent,
    OrderConfirmComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,

    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule
  ]
})
export class CartModule { }
