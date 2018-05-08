import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  data:any;
  restaurants:any;
  popularity:any;
  location:any;
  constructor() { }

  ngOnInit() {
    var httpreq = "geocode?lat=28.6101839&lon=77.2012427";
    var UserRequest = {
      "async": true,
      "crossDomain": true,
      "url": "https://developers.zomato.com/api/v2.1/"+httpreq+"",
      "method": "GET",
      "headers": {
      "user-key": "3c99a91c83aaebabc4ee9ca71bf6dba4",
      }
    }
    $.ajax(UserRequest).done(function (response) {
        this.data = response;
        console.log(this.data);
    })
    this.restaurants = this.data.nearby_restaurants;
    this.location = this.data.location;
    this.popularity = this.data.popularity
    console.log(this.location)
  }

}
