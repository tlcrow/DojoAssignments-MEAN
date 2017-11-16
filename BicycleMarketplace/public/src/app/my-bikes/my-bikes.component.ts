import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { BikeService } from './../bike.service'

@Component({
  selector: 'app-my-bikes',
  templateUrl: './my-bikes.component.html',
  styleUrls: ['./my-bikes.component.css']
})
export class MyBikesComponent implements OnInit {

  @Input() editBike;
  constructor(private _service:BikeService) { }
  errors;

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    this.editBike = changes.editBike.currentValue;
  }

  deleteBike(bikeId){
    this._service.delete(bikeId);
  }

  //delete bike

  onSubmit(){
    this._service.update(this.editBike._id, this.editBike)
    .then(bike => {
      this.editBike = bike;
    })
    .catch(err=>{
      this.errors = err;
    })
  }

  //updates bike

}
