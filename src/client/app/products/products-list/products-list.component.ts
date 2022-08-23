import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Product } from '../../shared/model/product.model';
import { ApiService } from '../../shared/services/api/api.service';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products!: Product[];

  seachTerm: string = '';

  breakpoint!: number;

  constructor(public api: ApiService, private auth: AuthService,
              private addNewContactdialog: MatDialog
             ) { 
    api.refreshCall$.subscribe(
      () => {
        this.refeshContacts(null);
      }  
    );
  }

  ngOnInit(): void {

    this.api.get('products')
      .subscribe(data => {
        this.products = data;
      });

    if(window.innerWidth <= 608) {
      this.breakpoint = 1;
    } else if (window.innerWidth <= 907) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }

  refeshContacts(event: null){
    this.ngOnInit();
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
