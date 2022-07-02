import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  auth: AngularFireAuth;
  hasSent: boolean = false;
  codeAccepted: boolean = false;
  errorMismatch: boolean = false;
  mode: string | undefined;
  oob: string = "";
  constructor(private fauth: AngularFireAuth, private router: Router, private route: ActivatedRoute) {
    this.auth = fauth;
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.mode = params['mode'];
      this.oob = params['oobCode'];
    });
    let verify: Promise<any> = this.verifyCode();
  }

  public async verifyCode(): Promise<any>{
    return await this.auth.verifyPasswordResetCode(this.oob)
    .then((email) => {
      this.codeAccepted = true;
    }).catch((error) => {
      this.router.navigate(['/forgot']);
    });
  }

  public async resetPassword(newPassword: string): Promise<boolean>{
    return await this.auth.confirmPasswordReset(this.oob, newPassword).then(() => {
      this.router.navigate(['/']);
      return true;
  }).catch((error) => {
      this.router.navigate(['/forgot']);
      return false;
  });
  }

  public resetPass(password: string, passwordRepeat: string){
    if(password === passwordRepeat){
      this.errorMismatch = false;
      this.resetPassword(password);
    } else {
      this.errorMismatch = true;
    }
  }

}
