import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchProductsPipe } from './pipe/products/search-products.pipe';

@NgModule({
  declarations: [
    SearchProductsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchProductsPipe
  ]
})
export class SharedModule { }
