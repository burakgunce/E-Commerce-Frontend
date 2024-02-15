import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import { ProductService } from '../../../../services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  
  constructor(private prodductService: ProductService){}

  displayedColumns: string[] = ['name', 'stock', 'prica', 'createdDate', 'updatedDate'];
  dataSource: MatTableDataSource<List_Product> = null;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
