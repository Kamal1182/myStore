import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../shared/model/product.model';
import { CartService } from '../../shared/services/cart/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  @HostBinding('class') columnClass = 'four wide column';

  Quantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 10]

  selectedQ = 1

  constructor(private Cart: CartService, private router: Router) {}

  ngOnInit(): void {
  }

  openProductInCart(selectedQ: number) {
    this.Cart.addProduct(this.product, selectedQ);
  }

  showDetails(product: Product) {
    this.router.navigateByUrl('products/details', {state: {product}});
  }

}
