import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { AuthPlusService } from './../auth-plus.service';
import { BikeService } from './../bike.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  @Input() allBikes;
  @Input() myId;
  @Input() search
  @Output() emitter = new EventEmitter();

  isCurrentOwner = false;

  constructor(private _service: AuthPlusService, private _bservice: BikeService) { }

  ngOnInit() {
    // console.log(this.allBikes.registration, "all bikes list")
    // console.log(this.myId)
    // console.log(this.myId == this.allBikes.registration)
    if(this.myId == this.allBikes.registration){
      this.isCurrentOwner = true;
    }
  }

  //updates list of bikes immediately

  // ngOnChanges(changes:SimpleChanges){
  //   this.allBikes = changes.allBikes.currentValue;
  // }

  deleteOrContact(){
    if(this.isCurrentOwner){
      this._bservice.delete(this.allBikes._id)
      this.emitter.emit();
      return
    }
    this._service.contactUser(this.allBikes.registration)

  }

}
