import { Component, OnInit, Input } from '@angular/core';
import { AuthPlusService } from '../auth-plus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  currentUser;
  

  constructor(private _service:AuthPlusService,private router:Router) { }

  ngOnInit() {
    this._service.getUser()//currentUser => this.currentUser = currentUser);
    .then((data)=>{
      this.currentUser = data
    })
    .catch((err)=>{
      // this.router.navigateByUrl('/')
      this.goLogout();
      console.log('could not find user', err)
    })
  }
  goLogout(){
    this._service.logout().subscribe(
      (data)=>{console.log(data)},
      (err)=>{console.log(err)}
    );
    window.location.reload();    
    this.router.navigateByUrl('/')
  }

// logout

}
