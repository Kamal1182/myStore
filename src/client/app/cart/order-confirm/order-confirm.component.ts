import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {

  fullName: string = '';

  price!: number

  constructor(private location: Location) { }

  ngOnInit(): void {
    const state = Object(this.location.getState());
    this.fullName = state.fullName;
    this.price = state.price;
  }

}
