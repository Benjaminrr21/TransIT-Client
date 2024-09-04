import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportService } from 'src/app/services/transport.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-search-vehicles',
  templateUrl: './search-vehicles.component.html',
  styleUrls: ['./search-vehicles.component.css']
})
export class SearchVehiclesComponent implements OnInit{
  selectedVehicles:any[] = []
  vehicles:any[] =[]
  co:number = 0
  tid:number = 0
 
  constructor(private vs:VehicleService,private ts:TransportService, private route:ActivatedRoute, private router:Router){}
  insert(){
     this.selectedVehicles.forEach(el => {
       this.ts.addVehicleToTransport(el,this.tid).subscribe(
         res => {
           console.log(res)
           this.router.navigate(['/search-drivers/'+this.tid]);
         },
         err => console.log(err)
       )
     });
  }
  ngOnInit(): void {
      this.getAll()
      this.tid = this.route.snapshot.params['id']
      this.co = this.route.snapshot.params['weight']
  }
  isCapacityOk(cv:number,co:number){
    return cv > co;
  }
  getAll(){
    this.vs.getAll().subscribe(
      res => this.vehicles = res,
      err => console.log(err)
    )
  }
  setToList(vid: number, event: any): void {
    if (event.target.checked) {
      this.selectedVehicles.push(vid);
      console.log(this.selectedVehicles)
    } else {
      const index = this.selectedVehicles.indexOf(vid);
      if (index > -1) {
        this.selectedVehicles.splice(index, 1);
      }
      
    }
  }
  



}
