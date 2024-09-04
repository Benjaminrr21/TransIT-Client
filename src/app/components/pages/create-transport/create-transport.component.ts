import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-create-transport',
  templateUrl: './create-transport.component.html',
  styleUrls: ['./create-transport.component.css']
})
export class CreateTransportComponent implements OnInit {
  /**
   *
   */
  date:Date = new Date()
  constructor(private ts:TransportService, private router:Router) {
    
  }
  
  ngOnInit(): void {
  }

  createOrder(){
    this.ts.add({timeCreated:this.date}).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['add-orders-transport/'+res.id])
      },
      err => console.log(err)
    )
  }
 

}
