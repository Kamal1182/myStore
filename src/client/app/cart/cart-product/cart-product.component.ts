import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared/model/product.model';
import { CartService } from '../../shared/services/cart/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input() product!: Product;

  @Input() orderedQuantity!: number;

  @Output() removeProductEvent = new EventEmitter<Product>();
  
  @Output() modifyProductEvent = new EventEmitter<Product>();

  @HostBinding('class') columnClass = 'four wide column';

  Quantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 10]

  selectedQ = 1

  constructor(private Cart: CartService) {}

  ngOnInit(): void {
    this.selectedQ = this.orderedQuantity;
  }

  modifyProductInCart(selectedQ: number) {
    this.Cart.addProduct(this.product, selectedQ);
    this.modifyProductEvent.emit();
  }

  removeProductFromCart(P: Product) {
    this.Cart.remove(P);
    this.removeProductEvent.emit(P)
  }
}
