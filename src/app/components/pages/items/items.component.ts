import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  allItems:any[] = []
  newItem:{} = {
    type:"",
    description:"",
    price:Number 
  }
  adding:boolean = false
  constructor(private service:ItemService){}
ngOnInit(): void {
    this.getAll();
}
  getAll(){
    this.service.getAll().subscribe(
      res => {
        console.log(res)
        this.allItems = res
      },
      err => console.log(err)
    )
  }
  add(){
    this.service.add(this.newItem).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
  addingItem(){
    this.adding = true
  }

}
