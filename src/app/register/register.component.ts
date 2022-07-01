import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isChecked: boolean = false;

  constructor() { }

  public fieldsChange(values: any): void{
    this.isChecked = values.currentTarget.checked;
  }

  ngOnInit(): void { }

}
