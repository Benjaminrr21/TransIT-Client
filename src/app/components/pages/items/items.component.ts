import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  allItems:any[] = []
  newItem:any = {
    category:"",
    description:"",
    price:"" 
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
      res =>{ 
        console.log(res)
        this.allItems.push(res)
      },
      err => console.log(err)
    )
  }
  addingItem(){
    this.adding = true
  }
  cancel(){
    this.adding = false
  }
  deleteItem(id:Number){
    this.service.delete(id).subscribe(
      res => {
        this.allItems = this.allItems.filter(a => a.id != id);
      },
      err => console.log(err)
    )
  }

}
