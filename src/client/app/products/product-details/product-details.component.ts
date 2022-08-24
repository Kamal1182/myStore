import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from '../../shared/model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
    if( !Object(this.location.getState()).product ) {this.router.navigate(['products'])};
    this.product = Object(this.location.getState()).product;
  }

}
