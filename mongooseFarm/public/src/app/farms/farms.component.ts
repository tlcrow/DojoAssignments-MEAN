import { Component, OnInit, Input } from '@angular/core';
import { MongooseService } from '../mongoose.service';
import { FarmService } from '../farm.service';
import { AuthPlusService } from '../auth-plus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {
  currentUser;
  farms = [];
  search ="";

  constructor(private _authService:AuthPlusService, private _farmService:FarmService, _mongooseService:MongooseService, private router:Router) { }

  ngOnInit() {
    this._authService.getUser()
    .then((data)=>{
      this.currentUser = data
    })
    .catch((err)=>{
      this.router.navigateByUrl('/')
      this.goLogout();
      // console.log('could not find user', err)
    })
    this._farmService.getAll()
      .then((data) => {
      this.farms = data})
      .catch((err) =>{
        console.log('service', err)
      })
  }

  goLogout(){
    this._authService.logout().subscribe(
      // (data)=>{console.log(data)},
      // (err)=>{console.log(err)}
    );
    window.location.reload();    
    this.router.navigateByUrl('/')
  }

}
