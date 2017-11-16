import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthPlusService } from './auth-plus.service';
import { MongooseService } from './mongoose.service';
import { FarmService } from './farm.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FarmsComponent } from './farms/farms.component';
import { NewFarmComponent } from './new-farm/new-farm.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import { NewMongooseComponent } from './new-mongoose/new-mongoose.component';
import { FarmUserComponent } from './farm-user/farm-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FarmsComponent,
    NewFarmComponent,
    FarmDetailsComponent,
    NewMongooseComponent,
    FarmUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule

  ],
  providers: [AuthPlusService, MongooseService, FarmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
