import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(firestore: Firestore) { 
    const col = collection(firestore, 'products');
    this.products$ = collectionData(col) as Observable<Product[]>;
  }


  ngOnInit(): void {
  }

}
