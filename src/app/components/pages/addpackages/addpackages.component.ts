import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
 id:number = 0
 num:number = 0;
 visible:boolean = false
 dodato:boolean[] = []
 
constructor(private itemService:ItemService, private packageService:PackageService, private route:ActivatedRoute){}
ngOnInit(): void {
    this.getItems()
    this.id = this.route.snapshot.params['id']
    console.log(this.id)

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
  this.visible = true
  this.num++;
  //alert(item.category)
  const price: number = parseInt(item.price); // Assuming item.price is a number
  const total: number = this.amount[item.id] * price;
  var p:any = {
    category:item.category,
    description:item.description,
    status:"ADDED",
    amount:this.amount[item.id],
    details:this.details[item.id],
    price:total,
    orderId:this.id
  }
  console.log(p)
  this.packageService.create(p).subscribe(
    (res) => {
      console.log(res)
      this.dodato[item.id] = true

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
