import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { AngularMaterialModule } from '../angular-material/angular-material.module';

// Search Pipe
import { SearchProductsPipe } from '../shared/pipe/products/search-products.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent,
    SearchProductsPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    // Material
    AngularMaterialModule,

    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { }
