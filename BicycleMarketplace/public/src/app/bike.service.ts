import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Bike } from './bike';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BikeService {
  private http:Http;
  private auth;

  constructor(http:Http) {
    this.http = http;
    this.auth = [];
   }

   public create(bike){
     console.log(bike);
     return this.http.post('/api/bike/new', bike)
     .map((response: Response) => response.json())
     .toPromise();
   }

   //create bike

   getBikes(cb){
    return this.http.get('/api/bike/listings')
    // .map((response:Response) => response.json()).toPromise();
    .subscribe(
      bikes=>{
        cb(bikes.json())
      },
      err=>{console.log("IN SERVICE back from Server:", err)}
    )
  }

  //get all bikes by one user

  delete(bikeId){
    return this.http.delete(`/api/bike/${bikeId}`)
    // 
    .subscribe(
    result => {},
    err => {console.log("Not Deleted")}
    )}

    //delete bike
  
  update(bikeId, bike){
    console.log('in service', bike)
    return this.http.put(`/api/bike/${bikeId}`, bike)
    .map((response: Response) => response.json())
    .toPromise();
  }

  //update bike

  getAllBikes(cb){
    return this.http.get(`/api/bikes`)
    .subscribe(
      bikes => {
        cb(bikes.json())
      },
      err => {console.log("iN sERVICE back from Server"), err}
    )
  }

//get all bikes

  search(search, cb){
    return this.http.get(`/api/bikes/${search}`)
    // .map((response:Response) => response.json()).toPromise();
    .subscribe(
      bikes=>{
        cb(bikes.json())
      },
      err=>{console.log("IN SERVICE back from Server:", err)}
    )
  }

  //search bar
}
