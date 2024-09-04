import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit{

  vehicles:any[] =[]
  vehicle:any = {
    regNumber:'',
    type:"",
    isAvailable:true,
    capacity:0,
    fuel:""
  }
  visible:boolean = false
  constructor(private vs:VehicleService){}

  ngOnInit(): void {
      this.getAll()
  }
  set(){
    this.visible = true
  }
  unset(){
    this.visible = false
  }
  getAll(){
    this.vs.getAll().subscribe(
      res => this.vehicles = res,
      err => console.log(err)
    )
  }
  insert(){
    console.log(this.vehicle)
    this.vs.add(this.vehicle).subscribe(
      res => {
        console.log(res)
        this.visible = false
        this.vehicles.push(res)
      },
      err => console.log(err)
    )
  }
  delete(id:number) {
    this.vs.delete(id).subscribe(
      res => this.vehicles = this.vehicles.filter(v => v.id != id),
      err => console.log(err)
    )
  }

}
