import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'blz-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {

  public loading: boolean = true;

  constructor() { }

  load_complete(){
    this.loading = false;
  }

  ngAfterViewInit(): void {
    this.load_complete();
  }
}
