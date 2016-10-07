import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Client } from '../_models/client';
import { ClientService } from '../_services/index';
import { Observable } from 'rxjs';

console.log('`Clients` component loaded asynchronously');

@Component({
  moduleId: module.id,
  selector: 'clients',
  providers: [
    ClientService
  ],
  styleUrls: [ './clients.style.css' ],
  templateUrl: './clients.template.html'
})
export class Clients {
  localState;
  sex: string[] = ['Feminino', 'Masculino'];
  marital_status: string[] = ['Solteiro', 'Casado', 'Divorciado', 'Outros'];
  client: Client;
  submitted: boolean = false;
  
  constructor(public route: ActivatedRoute, private clientService: ClientService) {

   }
  
  ngOnInit() {
      this.client = new Client(18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet', 'iq@superhero.com');
      
  }

  onSubmit()  {
    this.create();
    this.submitted = true;
  }

  create() {
    this.clientService.add(this.client).subscribe(
       data => {
         console.error("Success saving client!");
         // refresh the list
         //this.getAll();
         return true;
       },
       error => {
         console.error("Error saving client!");
         return Observable.throw(error);
       }
    );
  }
 
  edit() {
    this.clientService.update(this.client).subscribe(
       data => {
         // refresh the list
         //this.getAll();
         return true;
       },
       error => {
         console.error("Error saving client!");
         return Observable.throw(error);
       }
    );
  }
 
  remove() {
    if (confirm("Are you sure you want to delete " + this.client.name + "?")) {
      this.clientService.remove(this.client).subscribe(
         data => {
           // refresh the list
           //this.getAll();
           return true;
         },
         error => {
           console.error("Error deleting client!");
           return Observable.throw(error);
         }
      );
    }
  }
}
