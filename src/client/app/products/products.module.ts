import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { AngularMaterialModule } from '../angular-material/angular-material.module';

// Search Pipe
// import { SearchProductsPipe } from '../shared/pipe/products/search-products.pipe';

// shared
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    // SearchProductsPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    // Material
    AngularMaterialModule,

    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { }
