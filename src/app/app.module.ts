import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as $ from 'jquery';
import { AgmCoreModule } from '@agm/core';

import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LandComponent } from './land/land.component';
import { BrowseComponent } from './browse/browse.component';
import { LogoutComponent } from './logout/logout.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { CollectionsComponent } from './collections/collections.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WelcomeComponent,
    LandComponent,
    BrowseComponent,
    LogoutComponent,
    CuisineComponent,
    CollectionsComponent,
    RestaurantsComponent,
    MapComponent,
    AboutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBYh0EWNezQ5mSZuxaxuOZFgveJIx6CQG8',
      libraries: ["places"]
    })
  ],
  
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
