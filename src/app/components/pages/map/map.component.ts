import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const iconRetinaUrl = 'assets/images/marker-icon-2x.png';
const iconUrl = 'assets/images/marker-icon.png';
const shadowUrl = 'assets/images/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map:any;
  private initMap(): void {
    this.map = L.map('map', {
      center: L.latLng(43.1371, 20.5169),
      zoom: 16
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  constructor(private http:HttpClient,private router:Router){
  }
  private geocodeAddress(address: string): Promise<L.LatLng | null> {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
    return this.http.get<any[]>(url).toPromise().then((data) => {
      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        console.log(lat,lon);
        return L.latLng(lat, lon);
      } else {
        return null;
      }
    }).catch(() => {
      return null;
    });
  }
  
  private addMarkersToMap(): void {
    /*const promises = this.parking_places.map(place => 
      this.geocodeAddress(place.street).then((latLng) => {
        if (latLng) {
          const marker = L.marker(latLng);
          marker.setPopupContent(place.street);
          marker.bindPopup(`<div>${place.street}</div><div>${this.zones.find(z=>z.id==place.zoneId).name}</div>`,{
            autoClose:false,
            
          });
          marker.addTo(this.map);
        } else {
          console.error(`Unable to geocode address for place: ${place.name}`);
        }
      })
    );*/
  
    // Čekamo da se svi geokodirani podaci procesuiraju
   /* Promise.all(promises).then(() => {
      console.log('All markers added');
    });*/
  }

  ngAfterViewInit(): void {
    this.initMap();
      
  }

}
