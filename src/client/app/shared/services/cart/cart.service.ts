import { Injectable } from '@angular/core';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: { P: Product; Q: number } [] = [];

  addProduct(newP: Product, newQ: number): void {
    if( this.cart.length === 0 ) {
      this.cart.push({ P:newP, Q:newQ });
      alert(`${newP.name} added to the cart`)
    } else if( this.cart.some(item => item.P.name === newP.name) ) {
      this.cart.forEach( (item) => {
        if (item.P.name === newP.name) {
          item.Q = newQ
          alert(`${newP.name}'s Quatity Updated`)
        }
      })
    } else {
      this.cart.push({ P:newP, Q:newQ });
      alert(`${newP.name} added to the cart`)
    }
  }

  getAllOrder():{P: Product; Q: number}[] {
    return this.cart;
  }

  getAllProducts(): Product[] {
    let P: Product[] = [];
    this.cart.forEach((item) => {
      P.push(item.P);
    }) 
    return P;
  }

  remove(P: Product): void {
    this.cart = this.cart.filter((item) => item.P.name !== P.name)
  }

  getTotalPrice(): number {
    let result: number = 0
    this.cart.forEach((item) => {
      result += item.P.price * item.Q;
    })
    return result;
  }

  getTotalitems(): number {
    let result: number = 0;
    this.cart.forEach((item) => {
      result += item.Q;
    })
    return result;
  }

}
