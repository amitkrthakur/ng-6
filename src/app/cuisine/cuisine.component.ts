import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import * as $ from 'jquery'

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {

  data: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    // var httpreq = "cuisines?lat=28.4213889&lon=77.326699";
    // var UserRequest = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "https://developers.zomato.com/api/v2.1/"+httpreq+"",
    //   "method": "GET",
    //   "headers": {
    //   "user-key": "3c99a91c83aaebabc4ee9ca71bf6dba4",
    //   }
    // }
    // $.ajax(UserRequest).done(function (response) {
    //     this.data = response;
    //     console.log(this.data);
    // })
    this.http.getCategories().subscribe(
      (data: any) => {
        console.log(JSON.stringify(data));
      }
    )
  }
}

