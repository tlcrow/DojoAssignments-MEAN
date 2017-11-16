import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { Bike } from '../bike';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-bike',
  templateUrl: './new-bike.component.html',
  styleUrls: ['./new-bike.component.css']
})
export class NewBikeComponent implements OnInit {
  bike;
  errors=[];


  constructor(private _service:BikeService, private _router: Router) {
    this.bike = new Bike();
   }

  ngOnInit() {
  }
  onSubmit(){
    this._service.create(this.bike)
    .then(data=>{
      this.bike = new Bike();
      window.location.reload();
      this._router.navigateByUrl('/main/listings')
    })
    .catch (err=>{
      console.log('this is component', err)
      // var errs = JSON.parse(err._body);
      // for(let key in errs){
      // this.errors.push(errs[key].message)
    // }
    })
  }
}
