import { Injectable } from '@angular/core';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: { P: Product; Q: number } [] = [];

  addProduct(newP: Product, newQ: number): void {
    console.log(newP);
    console.log(newQ);
    if( this.cart.length === 0 ) {
      console.log('empty cart');
      this.cart.push({ P:newP, Q:newQ });
      console.log(this.cart);
      alert(`${newP.name} added to the cart`)
    } else if( this.cart.some(item => item.P.name === newP.name) ) {
      this.cart.forEach( (item) => {
        if (item.P.name === newP.name) {
          item.Q = newQ
          alert(`${newP.name}'s Quatity Updated`)
          console.log(this.cart);
        }
      })
    } else {
      this.cart.push({ P:newP, Q:newQ });
      alert(`${newP.name} added to the cart`)
    }
  }

  getAllProducts() {
    return this.cart;
  }
}
