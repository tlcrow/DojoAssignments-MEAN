import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Farm } from './farm';
import { Mongoose } from './mongoose';

@Injectable()
export class FarmService {
  private http:Http
  
    constructor(http:Http) {
      this.http = http;
     }
  
    getAll(){
      console.log("this is service-one to many-getAll");
      return this.http.get(`/api/farms`)
      .map((response: Response) => response.json())
      .toPromise();
    }
  
    create(farm){
      console.log("this is service-one to many-create", farm);
      return this.http.post('/api/farm/new', farm)
      .map((response: Response) => response.json())
      .toPromise();
    }
  
    getOne(farmId){
      console.log("get one id-one to many -service", farmId)
      return this.http.get(`/api/farm/${farmId}`)
      .map((response: Response) => response.json())
      .toPromise();
      }
      
    update(farmId, farm){
      console.log('in service-one to many-update', farm)
      return this.http.put(`/api/updatefarm/${farmId}`, farm)
      .map((response: Response) => response.json())
      .toPromise();
      }

    getOneOf(farmId){
      console.log('in service-one to many-getOneOf', farmId)
      return this.http.get('/api/farms/:id')
      // .map((response:Response) => response.json()).toPromise();
      .subscribe(
        farms=>{
          farmId(farms.json())
        },
        err=>{console.log("IN SERVICE back from Server:", err)}
        )
      }

      delete(farmId){
        console.log('in service-one to many-delete', farmId)
        return this.http.delete(`/api/farm/${farmId}`)
        // 
        .subscribe(
        result => {},
        err => {console.log("Not Deleted")}
        )}

    

}
