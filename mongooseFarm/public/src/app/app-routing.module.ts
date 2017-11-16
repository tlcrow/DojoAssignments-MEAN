import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FarmsComponent } from './farms/farms.component';
import { NewFarmComponent } from './new-farm/new-farm.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import { NewMongooseComponent } from './new-mongoose/new-mongoose.component';
import { FarmUserComponent } from './farm-user/farm-user.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: AuthComponent},
  {path:'farms', pathMatch: 'full', component: FarmsComponent},
  {path:'farm/new', pathMatch: 'full', component: NewFarmComponent},
  {path: 'farm/:id', pathMatch: 'full', component: FarmDetailsComponent },
  {path: 'mongoose/new/:id', pathMatch: 'full', component: NewMongooseComponent},
  {path: 'farms/user', pathMatch: 'full', component: FarmUserComponent},
  {path: 'dashboard', redirectTo: 'farms'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
