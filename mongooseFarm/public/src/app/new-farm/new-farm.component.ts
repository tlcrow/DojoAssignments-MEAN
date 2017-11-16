import { Component, OnInit, Input } from '@angular/core';
import { MongooseService } from '../mongoose.service';
import { FarmService } from '../farm.service';
import { AuthPlusService } from '../auth-plus.service';
import { Router } from '@angular/router';
import { Farm } from '../farm';
import { Mongoose } from '../mongoose';

@Component({
  selector: 'app-new-farm',
  templateUrl: './new-farm.component.html',
  styleUrls: ['./new-farm.component.css']
})
export class NewFarmComponent implements OnInit {
  farm;
  errors = [];

  constructor(private _authService:AuthPlusService, private _farmService:FarmService, _mongooseService:MongooseService, private router:Router) { 
    this.farm = new Farm();
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log("ON SUBMIT HAPPEND-new farm-component", this.farm)
    this._farmService.create(this.farm)
    .then(data => {
      // this.farm = new Farm();
      this.router.navigateByUrl('/farms')
    })
    .catch(err => {
      console.log('this is component-new farm-component', err)
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
