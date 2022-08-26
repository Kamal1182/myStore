import { Component, OnInit } from '@angular/core';
import { NgForm ,FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../shared/services/cart/cart.service';
import { Product } from '../../shared/model/product.model';
import { Contact } from '../../shared/model/contact';
import { ApiService } from '../../shared/services/api/api.service';
import { NEVER } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  
  order: { P: Product; Q: number } [] = [];

  products: Product[] = [];

  totalItems: number = 0;

  totalPrice: number = 0;

  seachTerm: string = '';

  orderDetails!: FormGroup;

  contact: Contact = {} as Contact
  // {fullName: '', address: '', creditCard: ''};

  breakpoint!: number;
  
  constructor(private Cart: CartService,
              public api: ApiService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {

    this.order = this.Cart.getAllOrder();
    this.products = this.Cart.getAllProducts();
    this.totalItems = this.Cart.getTotalitems();
    this.totalPrice = this.Cart.getTotalPrice();

    if(this.order.length !== 0 ) {
      this.orderDetails = this.fb.group({
        fullName:   [this.contact.fullName,   Validators.compose
                      ([
                        Validators.required,
                        Validators.minLength(5),
                        Validators.maxLength(50),
                      ])],
        address:    [this.contact.address,    Validators.compose
                      ([
                        Validators.required,
                        Validators.minLength(20),
                        Validators.maxLength(70),
                      ])],
        creditCard: [this.contact.creditCard, Validators.compose
                      ([
                        Validators.required,
                        Validators.maxLength(14),
                        Validators.minLength(14),
                      ])
                    ]
        })
    }
  }

  modifyProduct() {
    this.totalPrice = this.Cart.getTotalPrice();
    this.totalItems = this.Cart.getTotalitems();
  }

  removeProduct(P: Product) {
    this.order = this.order.filter((item) => item.P.name !== P.name);
    this.totalPrice = this.Cart.getTotalPrice();
    this.totalItems = this.Cart.getTotalitems();
  }

  onSubmit() {
    const formValues = Object.assign({}, this.orderDetails.value);
    this.Cart.reset();
    this.router.navigateByUrl('cart/confirm', {state: {fullName:formValues.fullName, price:this.Cart.getTotalPrice()}});
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
