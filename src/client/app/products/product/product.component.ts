import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Product } from '../../shared/model/product.model';
// import { EditContactModalComponent } from '../edit-contact-modal/edit-contact-modal.component';
// import { DeleteContactModalComponent } from '../delete-contact-modal/delete-contact-modal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  @HostBinding('class') columnClass = 'four wide column';

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openEditDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '640px';
    dialogConfig.data = this.product;

    // this.dialog.open(EditContactModalComponent, dialogConfig);
  }

  openDeleteDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '640px';
    dialogConfig.data = this.product;

    // this.dialog.open(DeleteContactModalComponent, dialogConfig);
  }

}
