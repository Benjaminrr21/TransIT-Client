import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureService } from 'src/app/services/facture.service';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-send-facture',
  templateUrl: './send-facture.component.html',
  styleUrls: ['./send-facture.component.css']
})
export class SendFactureComponent implements OnInit{
  id:number = 0
  orders:any[] = []
  transport:any={}
  visible:boolean = true
  
  
    amount:number = 0
    paying:string = ""
    dateCreated:Date = new Date()
  
  orderId:number = 0

  constructor(private ts:TransportService,private router:Router, private fs:FactureService, private route:ActivatedRoute){}
  ngOnInit(): void {
      this.id = this.route.snapshot.params["tid"]
      console.log(this.id)
      this.getTransport();
  }
  getTransport() {
    this.ts.get(this.id).subscribe(
      res =>{
        console.log(res)
        this.transport = res
        this.orders = this.transport.orders
      },
      err => console.log(err)
    )
  }
  send(id:number){
    this.orderId = id
    var d = new Date()
    
    console.log(id)
   
    var ford = {
      orderId: id,
      amount:this.amount,
      paying:this.paying,
      dateCreated:this.dateCreated
    }
    console.log(ford)

    this.fs.add(ford).subscribe(
      res => {
        console.log(res)
        this.orders = this.orders.filter(o => o.id != id)
        this.visible = false
        //this.router.navigate([""])
      },
      err => console.log(err)
    )
    console.log(id)
  }
}
