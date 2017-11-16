import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { GetAllComponent } from './get-all/get-all.component';
import { MainComponent } from './main/main.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingComponent } from './listing/listing.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: AuthComponent},
  {path:'main', component: MainComponent, 
    children: [
      {path:'browse', component: BrowseComponent},
      {path:'listings', component: ListingComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
