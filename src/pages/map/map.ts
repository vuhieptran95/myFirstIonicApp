import { MapService } from './../../services/map.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapRef: ElementRef;
  map: any;
  mapElement: HTMLElement;
  maps: any;
  mapInfo: any[] = null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private mapService: MapService) {
    
    // this.showMap();
  }

  ionViewDidLoad() {

    this.mapService.getMapInfo().subscribe(x => {
      this.mapInfo = x;
      this.showMap();
    });
    
  }

  showMap() {
    var location = new google.maps.LatLng(this.mapInfo[0].lat, this.mapInfo[0].lng);

    var options = {
      center: location,
      zoom: 15,
      mapTypeId: 'roadmap'
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)

    this.mapInfo.forEach(map=>{
      let location = new google.maps.LatLng(map.lat, map.lng);
      this.addMarker(location, this.map);
    })
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    });
  }
}
