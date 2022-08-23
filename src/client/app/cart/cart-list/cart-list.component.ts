import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart/cart.service';
import { Product } from '../../shared/model/product.model';
import { ApiService } from '../../shared/services/api/api.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  products: Product[] = [];

  seachTerm: string = '';

  breakpoint!: number;
  
  constructor(private Cart: CartService, public api: ApiService,) { }

  ngOnInit(): void {
    this.Cart.getAllProducts().forEach((item) => {
      this.products.push(item.P);
    })
  }


  onResize(event: any) {
    if(event.target.innerWidth <= 608) {
      this.breakpoint = 1;
    } else if (event.target.innerWidth <= 907) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }
}
