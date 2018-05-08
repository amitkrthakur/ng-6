import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  data:any;

  constructor() { }

  ngOnInit() {
    var httpreq = "collections?lat=28.4213889&lon=77.326699";
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
  }

}
