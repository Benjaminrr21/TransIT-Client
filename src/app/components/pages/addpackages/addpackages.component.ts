import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-addpackages',
  templateUrl: './addpackages.component.html',
  styleUrls: ['./addpackages.component.css']
})
export class AddpackagesComponent implements OnInit {
 public items:any[] = []
 amount:number[] = [];
 details:string[] = [];
 
constructor(private itemService:ItemService, private packageService:PackageService){}
ngOnInit(): void {
    this.getItems()
}
getItems()  {
  this.itemService.getAll().subscribe(
    res => {
      console.log(res)
      this.items = res
    },
    error => console.log(error)
  )
}
add(item:any){
  //alert(item.category)
  const price: number = item.price; // Assuming item.price is a number
  const total: number = this.amount[item.id] * price;
  var p:any = {
    category:item.category,
    description:item.description,
    status:"ADDED",
    amount:this.amount,
    details:this.details,
    price:total,
    orderId:17
  }
  this.packageService.create(p).subscribe(
    (res) => {
      console.log(res)
    },
    err => {
      console.log(err)
    }
  )
}
addNew(item:any){
this.itemService.add(item).subscribe(
  res => console.log(res),
  err => console.log(err)
)
}

}
