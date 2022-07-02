import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  auth: AngularFireAuth;
  hasSent: boolean = false;
  constructor(private fauth: AngularFireAuth) {
    this.auth = fauth;
  }

  ngOnInit(): void {

  }

  public sendEmail(email: any): void{
    if(email !== "" && email !== null){
      this.hasSent = true;
      this.auth.sendPasswordResetEmail(email);
    }
  }

}
