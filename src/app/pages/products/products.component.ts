import { Component, OnInit } from '@angular/core';

import { page } from './products.page';
import { Product } from 'src/app/models/product.model';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public page = page;
  products$: Observable<Product[]>;
  constructor(private appService: AppService, firestore: Firestore) { 
    appService.setPage(page);
    const col = collection(firestore, 'products');
    this.products$ = collectionData(col) as Observable<Product[]>;
  }

  ngOnInit(): void {
      
  }
}
