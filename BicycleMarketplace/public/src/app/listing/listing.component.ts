import { Component, OnInit } from '@angular/core';
import { BikeService } from './../bike.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  bikes= [];

  constructor(private _service:BikeService) { }

  ngOnInit() {
    this._service.getBikes((data)=>this.bikes = data)
  }

  //updates bikes immediately

}
