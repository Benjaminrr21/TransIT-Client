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
  myOrdersSend:any[] = []
  packages:any[] = []
  viewPackages:boolean = false
  date:Date = new Date();
  packagesVisible:number = 0
  viewAlert:boolean = false

  constructor(private router:Router,private service:OrderService, private packageService:PackageService){
    
  }
  set(id:number){
    this.packagesVisible = id
  }
  unset(){
    this.packagesVisible = 0
  }
  delete(id:number){
    this.packageService.delete(id).subscribe(
      res => {
        console.log(res)
        this.router.navigate([this.router.url]);

      },err =>
      console.log(err)
    )
  }

  getAll(){
    return this.service.getAll().subscribe(
      res =>{ 
        console.log(res)
        this.myOrders = res
        this.myOrders2 = this.myOrders.filter(r => r.clientId == sessionStorage.getItem("id") && r.status == "ADDED")
        this.myOrdersSend = this.myOrders.filter(r => r.clientId == sessionStorage.getItem("id") && r.status == "SEND")
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
  format(s:string):string{
    return s[8]+s[9]+'.'+s[5]+s[6]+'.'+s[0]+s[1]+s[2]+s[3]+'.'
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
  alertLogic(){
    this.viewAlert = true;
    setTimeout(() => {
      this.viewAlert = false
    }, 2000);
  }
  sendOrder(id:Number){
    this.service.sendFromClient(id).subscribe(
      (res) => {
        this.alertLogic()
        console.log(res)
        this.router.navigate([this.router.url]);

        //this.myOrders2 = this.myOrders2.filter(o => o.id != res.id);
      },
      err => console.log(err)

    )
  }
  isSend(p:any) {
    if(p.status == "NEW") return false
    return true
  }
  deleteOrder(id:number) {
    this.service.delete(id).subscribe(
      res => this.myOrders2 = this.myOrders2.filter(o => o.id != id),
      err => console.log(err)
    )
  }
}
