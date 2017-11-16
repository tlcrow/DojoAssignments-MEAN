import { Component, OnInit } from '@angular/core';
import { BikeService } from './../bike.service';
import { AuthPlusService } from './../auth-plus.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  bikes = [];
  id;
  search={content:""};

  constructor(private _service: BikeService, private _router: Router, private _auth: AuthPlusService) { }

  ngOnInit() {
    this.getList()
  //   this._auth.getUser()
  //   .then((registration)=>{
  //     console.log("browse", registration._id)
  //     this.id = registration._id
  //   })
  //   .catch((err)=>{
  //     this.id = "";
  //     this._router.navigateByUrl('/')      
  //     console.log('could not find user', err)
  //   })
  //   this._service.getAllBikes((data)=>this.bikes = data)
  }

  updateList(){
    this.getList()
  }

  getList(){
    this._auth.getUser()
    .then((registration)=>{
      console.log("browse", registration._id)
      this.id = registration._id
    })
    .catch((err)=>{
      this.id = "";
      this._router.navigateByUrl('/')      
      console.log('could not find user', err)
    })
    this._service.getAllBikes((data)=>this.bikes = data)
  }

//gets list

  searchB(){
    this._service.search(this.search.content,(data)=>this.bikes = data)
    
  }

  //for search bar
}
