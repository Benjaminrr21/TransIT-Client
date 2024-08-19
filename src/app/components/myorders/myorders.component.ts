import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  
  myOrders:any[] = []
  myOrders2:any[] = []
  packages:any[] = []
  viewPackages:boolean = false
  date:Date = new Date();
  

  constructor(private router:Router,private service:OrderService, private packageService:PackageService){
    
  }
  

  getAll(){
    return this.service.getAll().subscribe(
      res =>{ 
        console.log(res)
        this.myOrders = res
        this.myOrders2 = this.myOrders.filter(r => r.clientId == sessionStorage.getItem("id") && r.status == "ADDED")
        this.myOrders2.forEach(element => {
          Date.parse(element.timeCreated)
          console.log(element.timeCreated)
        });
      },
      err => console.log(err)
    )
  }
  ngOnInit(): void {
      this.getAll();
      
  }
  view(id:Number){
    this.packages = this.myOrders2.find(p => p.id == id).packages;
    this.viewPackages = !this.viewPackages;

  }
  deletePackage(id:Number){
    this.packageService.delete(id).subscribe(
      (res) =>{
        console.log(res)
        this.packages.filter(p => p.id != id)
      },
      err => console.log(err)
    )
    //alert(id)
  }
  sendOrder(id:Number){
    this.service.sendFromClient(id).subscribe(
      (res) => {
        console.log(res)
        this.router.navigate([""])
      },
      err => console.log(err)

    )
  }
}
