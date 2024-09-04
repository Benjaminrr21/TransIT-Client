import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportService } from 'src/app/services/transport.service';

const iconRetinaUrl = 'assets/images/marker-icon-2x.png';
const iconUrl = 'assets/images/marker-icon.png';
const shadowUrl = 'assets/images/marker-shadow.png';
const redIconUrl = 'assets/images/red-icon.png'; // Dodaj URL za crvenu ikonu

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
const redIcon = L.icon({
  iconUrl: redIconUrl, // Koristi crvenu ikonu
  shadowUrl: shadowUrl,
  iconSize: [30, 30],
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
export class MapComponent implements AfterViewInit,OnInit {
  private map: any;
  start:string = "";
  private movingMarker: any;
  private tid:number = 0;
  transport:any = {}
  newAddress:string =''
  visible:boolean = false
  locations: any[] = [
  
  ]
  sortedLocations:any[] = []
  locationsOptimal:any[] = []
  private markerCoordinates: L.LatLng[] = [];
  view(){
    this.visible = true
  }
  add(){
    this.locations.push({
      address:this.newAddress
    })
    this.visible = false
    this.addMarkersToMap()
  }
  addStart(){
    // Postavi početnu lokaciju kao prvi element niza
    this.locations.unshift({
      address: this.start
    });
    this.addMarkersToMap();
  }
  
  
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
  ngOnInit(): void {
      this.tid = this.route.snapshot.params['id']
      this.getTransport()
  }
  mappingAdresses(): string[] {
    const optimalPath = this.findOptimalPath();
    const sortedAddresses: string[] = [];
  
    optimalPath.forEach(optimalPoint => {
      const matchingLocation = this.locations.find(location => {
        return this.geocodeAddress(location.address).then(latLng => {
          if (latLng) {
            return latLng.equals(optimalPoint);
          }
          return false;
        });
      });
  
      if (matchingLocation) {
        sortedAddresses.push(matchingLocation.address);
      }
    });
  
    return sortedAddresses;
  }
  
  getTransport(){
    this.ts.get(this.tid).subscribe(
      res => {
        console.log(res)
        this.transport = res
        this.locations = res.orders

        console.log(this.locations)
        this.addMarkersToMap();

      }
    )
  }

  constructor(private http: HttpClient, private router: Router,private ts:TransportService, private route:ActivatedRoute) { }

  private geocodeAddress(address: string): Promise<L.LatLng | null> {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
    return this.http.get<any[]>(url).toPromise().then((data) => {
      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        return L.latLng(lat, lon);
      } else {
        return null;
      }
    }).catch(() => {
      return null;
    });
  }

   private addMarkersToMap(): void {
    const promises = this.locations.map(place =>
      this.geocodeAddress(place.address).then((latLng) => {
        if (latLng) {
          this.markerCoordinates.push(latLng);
          const marker = L.marker(latLng);
          marker.setPopupContent(place.address);
          marker.bindPopup(`<div>${place.address}</div><div>${this.locations.indexOf(place)+1}</div>`, {
            autoClose: false,
          });
          marker.addTo(this.map);
          console.log(marker)
        } else {
          console.error(`Unable to geocode address for place: ${place.name}`);
        }
      })
    ); 
    

    Promise.all(promises).then(() => {
      this.drawOptimalPolyline();
    
    });
  }

  private getDistance(pointA: L.LatLng, pointB: L.LatLng): number {
    return pointA.distanceTo(pointB);
  }

  private findOptimalPath(): L.LatLng[] {
    const unvisited = [...this.markerCoordinates];
    const startPoint = unvisited.shift()!;
    const path: L.LatLng[] = [startPoint];

    let currentPoint = startPoint;
    while (unvisited.length > 0) {
      let nearestPoint = unvisited[0];
      let nearestDistance = this.getDistance(currentPoint, nearestPoint);

      for (const point of unvisited) {
        const distance = this.getDistance(currentPoint, point);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestPoint = point;
        }
      }

      path.push(nearestPoint);
      currentPoint = nearestPoint;
      unvisited.splice(unvisited.indexOf(nearestPoint), 1);
    }
    return path;
  }

  private drawOptimalPolyline(): void {
    if (this.markerCoordinates.length > 1) {
      const optimalPath = this.findOptimalPath();
      const polyline = L.polyline(optimalPath, { color: 'green', weight: 5, dashArray: '10,8', opacity: 0.7 });
      polyline.addTo(this.map);
      this.map.fitBounds(polyline.getBounds());

      this.sortedLocations = this.mappingAdresses();
    }
  }

  public startMoving(): void {
    const optimalPath = this.findOptimalPath();
    let currentIndex = 0;

    this.movingMarker = L.marker(optimalPath[0], { icon: redIcon }).addTo(this.map);


    const moveToNextPoint = () => {
      if (currentIndex < optimalPath.length - 1) {
        currentIndex++;
        this.movingMarker.setLatLng(optimalPath[currentIndex]);
        setTimeout(moveToNextPoint, 1500); // Pauza od 1 sekunde između tačaka
      }
      else {
        this.ts.finalTransport(this.tid).subscribe(
          res =>{
             alert("Transport je zavrsen.")
             this.router.navigate(['add-travel-cost/'+this.tid])
          },
          err => console.log(err)
        )
      }
    };

    moveToNextPoint();
  }
  /*private getSortedAddresses(): string[] {
    const optimalPath = this.findOptimalPath();
    const sortedAddresses: string[] = [];
  
    optimalPath.forEach(latLng => {
      let closestLocation: { address: string } | null = null;
      let closestDistance = Infinity;
  
      this.locations.forEach((location, index) => {
        const latLngFromAddress = this.markerCoordinates[index];
        const distance = this.getDistance(latLng, latLngFromAddress);
  
        if (distance < closestDistance) {
          closestDistance = distance;
          closestLocation = location;
        }
      });
  
      if (closestLocation) {
        sortedAddresses.push(closestLocation.address);
      }
    });
  
    return sortedAddresses;
  }*/
  
  

  ngAfterViewInit(): void {
    this.initMap();
  }
  getRole(){
    return sessionStorage.getItem("role");
  }
  sendRoute(){
    this.ts.sendRoute(this.tid,this.transport.driverId).subscribe(
      res => {
        console.log(res)
        this.router.navigate([''])

      },err => console.log(err)
    )
  }
}
