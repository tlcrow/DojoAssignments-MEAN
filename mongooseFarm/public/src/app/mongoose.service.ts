import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Farm } from './farm';
import { Mongoose } from './mongoose';

@Injectable()
export class MongooseService {

  private http:Http
  
    constructor(http:Http) {
      this.http = http;
     }
  
    getAll(){
      console.log("this is service-many to one-getAll");
      return this.http.get(`/api/mongooses`)
      .map((response: Response) => response.json())
      .toPromise();
    }
  
    create(mongoose, farmId){
      console.log("this is service-many to one-create", mongoose);
      return this.http.post(`/api/mongoose/new/${farmId}`, mongoose)
      .map((response: Response) => response.json())
      .toPromise();
    }
  
    getOne(mongooseId){
      console.log("get one id-many to one -service", mongooseId)
      return this.http.get(`/api/mongoose/${mongooseId}`)
      .map((response: Response) => response.json())
      .toPromise();
      }
      
    update(mongooseId){
      console.log('in service-many to one-update')
      return this.http.get(`/api/updatemongoose/${mongooseId}`)
      .map((response: Response) => response.json())
      .toPromise();
      }

    delete(mongooseId){
      console.log('in service-many to one-delete', mongooseId)
      return this.http.delete(`/api/mongoose/${mongooseId}`)
        // 
      .subscribe(
      result => {},
      err => {console.log("Not Deleted")}
      )}

    


}
