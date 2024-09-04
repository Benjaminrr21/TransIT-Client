import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-follow-my-order',
  templateUrl: './follow-my-order.component.html',
  styleUrls: ['./follow-my-order.component.css']
})
export class FollowMyOrderComponent {
  number:Number = 0;
  status:string =""
  ca:string =""
  constructor(private os:OrderService){}

  followOrder(){
    this.os.getById(this.number).subscribe(
      res => {
        console.log(res)
        this.status = res.status
        this.ca = res.currentAddress
      },
      err =>{
        this.status = "ERROR"
       console.log(err)
      }
    )
  }

}
