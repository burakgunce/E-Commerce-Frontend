import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import { ProductService } from '../../../../services/common/models/product.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent extends BaseComponent implements OnInit {
  
  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertifyService: AlertifyService){
    super(spinner)
  }

  displayedColumns: string[] = ['name', 'stock', 'prica', 'createdDate', 'updatedDate'];
  dataSource: MatTableDataSource<List_Product> = null;
  
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.productService.read(() => this.hideSpinner(SpinnerType.BallAtom), errorMessage => this.alertifyService.message(errorMessage, {
      dismissOthers: true,
      messageType: MessageType.Error,
      position: Position.TopRight
    }));
  }

}
