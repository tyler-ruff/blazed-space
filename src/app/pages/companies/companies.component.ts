import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/shared/app.service';

import { page } from './companies.page'; 
import { Company } from 'src/app/models/company.model';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  public page = page;
  public companies$: Observable<Company[]>;

  constructor(private appService: AppService, firestore: Firestore) {
    appService.setPage(page);
    const col = collection(firestore, 'companies');
    this.companies$ = collectionData(col) as Observable<Company[]>;
  }

  ngOnInit(): void {
  }

}