import { Component, OnInit, Input } from '@angular/core';
import { AuthPlusService } from '../auth-plus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentUser;

  constructor(private _service:AuthPlusService,private router:Router) { }
  
    ngOnInit() {
      this._service.getUser()
      .then((data)=>{
        this.currentUser = data
      })
      .catch((err)=>{
        this.router.navigateByUrl('/')
        this.goLogout();
        // console.log('could not find user', err)
      })
    }
    goLogout(){
      this._service.logout().subscribe(
        // (data)=>{console.log(data)},
        // (err)=>{console.log(err)}
      );
      window.location.reload();    
      this.router.navigateByUrl('/')
    }

    //logout

}
