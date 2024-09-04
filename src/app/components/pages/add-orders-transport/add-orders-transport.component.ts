import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-add-orders-transport',
  templateUrl: './add-orders-transport.component.html',
  styleUrls: ['./add-orders-transport.component.css']
})
export class AddOrdersTransportComponent implements OnInit{
  newOrders:any[] = []
  allOrders:any[] = []
  selectedShipments: number[] = [];
  weight:number = 0
  totalWeight:number = 0
  orderweight:number[] = []
  tid:number = 0;
constructor(private os:OrderService, private route:ActivatedRoute, private router:Router){}
ngOnInit(): void {
    this.getAll()
  this.tid = this.route.snapshot.params['id']
  console.log(this.tid)
}
format(s:string):string{
  return s[8]+s[9]+'.'+s[5]+s[6]+'.'+s[0]+s[1]+s[2]+s[3]+'.'
}
set(id:number){
  this.weight = id;
}
setToList(shipmentId: number, event: any): void {
  if (event.target.checked) {
    this.selectedShipments.push(shipmentId);
    console.log(this.selectedShipments)
    if(this.allOrders.find(o => o.id == shipmentId).weight != 0){
      this.totalWeight += this.allOrders.find(o => o.id == shipmentId).weight
    }
    else {
    this.weight = shipmentId
    }
  } else {
    const index = this.selectedShipments.indexOf(shipmentId);
    if (index > -1) {
      this.selectedShipments.splice(index, 1);
    }
    this.weight = 0
    this.totalWeight -= this.allOrders.find(o => o.id == shipmentId).weight

  }
}
addWeight(id:number){
this.os.addWeight(id,this.orderweight[id]).subscribe(
  res => {
    console.log(res)
   this.totalWeight += res.weight
    this.weight = 0

  },
  err => console.log(err)
)
}

insert(){
  this.selectedShipments.forEach(el => {
    this.os.addOrderToTransport(el,this.tid).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  });
  this.router.navigate(['search-vehicles/'+this.tid+'/'+this.totalWeight])
}
unset(){
  this.weight = -1
}
getAll(){
  this.os.getAll().subscribe(
    res => {
      console.log(res)
      this.allOrders = res
      this.newOrders = this.allOrders.filter(o => o.status = "NEW")
    },err => console.log(err)
  )
}
}
