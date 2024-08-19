import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {
  orders:any[] = []
  orders1:any[] = []
  orders2:any[] = []
  constructor(private service:OrderService){
  }

  getAllOrders(){
    this.service.getAll().subscribe(
      (res) => {
        console.log(res)
        this.orders = res;
        this.orders1 = this.orders.filter(o => o.status == "SEND")
        this.orders2 = this.orders.filter(o => o.status != "SEND")

      },
      error => {
        console.log(error)
      }
    )
  }
ngOnInit(): void {
    this.getAllOrders()

}
}
