import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit() {
    //   var map, UserLocation, marker, infoWindow;
    //   function initMap() {
    //     UserLocation = {lat:28.6101839, lng:77.2012427};

    //     map = new google.maps.Map(document.getElementById('map'), {
    //       zoom: 13,
    //       center: UserLocation
    //     });


    //     marker = new google.maps.Marker({
    //     position: UserLocation,
    //     map: map
    //     });

    //     infoWindow= new google.maps.InfoWindow({
    //       content:''
    //     });


    // }


    //   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    //     infoWindow.setPosition(pos);
    //     infoWindow.setContent(browserHasGeolocation ?
    //                           'Error: The Geolocation service failed.' :
    //                           'Error: Your browser doesn\'t support geolocation.');
    //     infoWindow.open(map);
    //   }

    // // Try HTML5 geolocation.

    // function getLocation(){
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(function(position) {
    //         var pos = {
    //           lat: position.coords.latitude,
    //           lng: position.coords.longitude
    //         };

    //         infoWindow.setPosition(pos);
    //         infoWindow.setContent(
    //             '<h2>Here you Are..!</h2><br /><p>Now lets find some nearby Restaurants...<br/>just click<strong>Show Nearby Restaurant</strong></p>'           
    //         );
    //         infoWindow.open(map);
    //         map.setCenter(pos);

    //         UserLocation = pos;

    //       }, function() {
    //         handleLocationError(true, infoWindow, map.getCenter());
    //       });

    //     } 

    //     else {
    //       // Browser doesn't support Geolocation
    //       handleLocationError(false, infoWindow, map.getCenter());
    //     }
    // }

    // //Request Nearby Restaurants
    // function findRestaurants(){

    //     infowindow = new google.maps.InfoWindow();

    //     var service = new google.maps.places.PlacesService(map);  
    //     service.nearbySearch({
    //       location: UserLocation,
    //       radius: 5000,
    //       type: ['restaurant']
    //     }, callback);

    //     console.log(UserLocation);
    //     var details = new google.maps.places.PlacesService(map);

    //   }

    //   function callback(results, status) {
    //     if (status === google.maps.places.PlacesServiceStatus.OK) {
    //       for (var i = 0; i < results.length; i++) {
    //         createMarker(results[i]);
    //       }
    //     }
    //   }

    //   function createMarker(place) {
    //     var placeLoc = place.geometry.location;
    //     var marker = new google.maps.Marker({
    //       map: map,
    //       position: place.geometry.location
    //     });

    //     google.maps.event.addListener(marker, 'click', function() {

    //     infowindow.setContent('<strong>' + place.name + '</strong>');
    //       infowindow.open(map, this);
    //     });
    //   }
  }

}
