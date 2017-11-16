import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Auth } from './auth';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthPlusService {
  private http:Http;
  private auth;

  constructor(http:Http) {
    this.http = http;
    this.auth = [];
   }

   public create(auth){
     console.log(auth);
     return this.http.post('/api/registration', auth)
     .map((response: Response) => response.json())
     .toPromise();
   }

   //create auth

   public login(auth){
     console.log("service");
     return this.http.post('/api/login', auth)
     .map((response:Response) => {
       response.json()
      })
     .toPromise()
   }

//login auth

   logout(){
    // alert("@ Service")
    return this.http.get('/api/logout')
   }

//logout auth

   getUser(){
     return this.http.get('/api/user').map((response:Response) => response.json()).toPromise();
   }

//get user for session

   contactUser(id){
    return this.http.get(`/api/contacts/${id}`)
    .map((response:Response) => response.json())
    .subscribe(
      contact => { 
        let print = `Name: ${contact.name}\n Email: ${contact.email}` 
        alert(print) 
      },
      err => {console.log("Not Found"), err}
    )
   }

//get one user info

}

