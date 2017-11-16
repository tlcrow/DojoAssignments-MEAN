import { Component, OnInit, Input } from '@angular/core';
import { MongooseService } from '../mongoose.service';
import { FarmService } from '../farm.service';
import { AuthPlusService } from '../auth-plus.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Farm } from '../farm';
import { Mongoose } from '../mongoose';

@Component({
  selector: 'app-new-mongoose',
  templateUrl: './new-mongoose.component.html',
  styleUrls: ['./new-mongoose.component.css']
})
export class NewMongooseComponent implements OnInit {
  mongoose;
  errors = [];
  _id;
  farm;

  constructor(private _authService:AuthPlusService, private _farmService:FarmService, private _mongooseService:MongooseService, private router:Router, private _ar:ActivatedRoute) {
    this.mongoose = new Mongoose()
    this._ar.paramMap.subscribe(params => {
      this._id = params.get('id');
      console.log(this._id)
    })
   }

  ngOnInit() {
    this._farmService.getOne(this._id)
    .then((data) => {
      console.log(data)
      this.farm = data
    console.log(this.farm)})
    .catch((err) =>{
      console.log('service', err)
      })
  }
  onSubmit(){
    this._mongooseService.create(this.mongoose, this._id)
    .then(data => {
      this.router.navigateByUrl('/farms')
    })
    .catch(err => {
      console.log('this is component-many to one-create', err)
      this.errors = JSON.parse(err._body);
    })
  }

  goLogout(){
    this._authService.logout().subscribe(
    );
    window.location.reload();    
    this.router.navigateByUrl('/')
  }


}
