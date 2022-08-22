import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../model/product.model';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductsPipe implements PipeTransform {

  transform(products: Product[], pipeModifier: String): Product[] {
    if ( !products || !pipeModifier ) {
      return products;
    } 
    
    return products.filter( eachItem => {
      return (
        eachItem.name ? eachItem.name.toLowerCase().includes(pipeModifier.toLowerCase()) : 
                        eachItem.name.toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
