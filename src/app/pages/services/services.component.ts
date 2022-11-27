import { Component, OnInit } from '@angular/core';

import { Service } from './../../models/service.model';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services$: Observable<Service[]>;
  constructor(firestore: Firestore) { 
    const col = collection(firestore, 'services');
    this.services$ = collectionData(col) as Observable<Service[]>;
  }

  ngOnInit(): void {
  }

}
