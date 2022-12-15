import { Inject, Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})

export class SibService {
    protected apiKey;
    protected listId;

    constructor(){
        this.apiKey = environment.sendinblue.apiKey;
        this.listId = environment.sendinblue.mailingListId;
    }

    async createContact(email: string){
        return fetch('https://api.sendinblue.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Api-Key': this.apiKey
            },
            body: JSON.stringify({ "email": email, "listIds": [this.listId] })
        });
    }

    
}

