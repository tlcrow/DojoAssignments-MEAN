import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthPlusService } from './auth-plus.service';
import { BikeService } from './bike.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { GetAllComponent } from './get-all/get-all.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { RandomBikeComponent } from './random-bike/random-bike.component';
import { MainComponent } from './main/main.component';
import { BrowseComponent } from './browse/browse.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { ListingComponent } from './listing/listing.component';
import { NewBikeComponent } from './new-bike/new-bike.component';
import { MyBikesComponent } from './my-bikes/my-bikes.component';
import { SearchPipe } from './searchPipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    GetAllComponent,
    LogRegComponent,
    RandomBikeComponent,
    MainComponent,
    BrowseComponent,
    BikeListComponent,
    ListingComponent,
    NewBikeComponent,
    MyBikesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule

  ],
  providers: [AuthPlusService, BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
