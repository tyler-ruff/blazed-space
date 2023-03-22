import { Component, AfterViewInit } from '@angular/core';

import { page } from './services.page';
import { Service } from './../../models/service.model';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {

  public page = page;
  public loading: boolean = true;

  services$: Observable<Service[]>;
  constructor(private appService: AppService,firestore: Firestore) { 
    appService.setPage(page);
    const col = collection(firestore, 'services');
    this.services$ = collectionData(col) as Observable<Service[]>;
  }

  load_complete(){
    this.loading = false;
  }

  ngAfterViewInit(): void {
    this.load_complete();
  }

}
