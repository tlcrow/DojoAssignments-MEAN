import { Component, OnInit, Input } from '@angular/core';
import { MongooseService } from '../mongoose.service';
import { FarmService } from '../farm.service';
import { AuthPlusService } from '../auth-plus.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Farm } from '../farm';
import { Mongoose } from '../mongoose';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.css']
})
export class FarmDetailsComponent implements OnInit {
  // mongooses = [];
  _id;
  farm;

  constructor(private _authService:AuthPlusService, private _farmService:FarmService, private _mongooseService:MongooseService, private router:Router, private _ar:ActivatedRoute) {
    this._ar.paramMap.subscribe(params => {
      this._id = params.get('id');
      console.log(this._id)
    })
   }

  ngOnInit() {
    this.getFarm()
    this.sortLikes()
  }

  onLike(id){
    this._mongooseService.update(id)
      .then((data) => {
        console.log(data)
        this.getFarm()
        // this.sortLikes()
    })
       .catch((err) =>{
        console.log('service err')
      })
}

  goLogout(){
    this._authService.logout().subscribe(
    );
    window.location.reload();    
    this.router.navigateByUrl('/')
  }

  getFarm(){
    this._farmService.getOne(this._id)
    .then((data) => {
      console.log(data)
      this.farm = data
      this.sortLikes()
    console.log(this.farm)})
    .catch((err) =>{
      console.log('service', err)
      })
  }

  sortLikes(){
    this.farm._mongoose.sort((a, b) =>{
      return b.likes - a.likes;
    })
  }

  delete(mongooseId){
    this._mongooseService.delete(mongooseId);
    this.getFarm();
  }
}
