import { Component, OnInit } from '@angular/core';
import { SibService } from 'src/app/shared/sib-service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  error = 0;
  success = 0;
  constructor(public sibService: SibService) { }

  ngOnInit(): void {
  }

  ValidateEmail(email: string) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,12})+$/.test(email))
    {
      return true
    }
    return false
}

  signup(email: string): void{
    this.error = 0;
    this.success = 0;
    if(this.ValidateEmail(email)){  
      this.sibService.createContact(email)
      .then(response => response.json())
      .then(response => {
        //console.log(JSON.stringify(response));
        if(response.code === "duplicate_parameter"){
          this.error = 2;
        }
        if(response.id !== undefined){
          this.success = 1;
        }
      })
    } else {
      this.error = 1;
    }

  }

}
