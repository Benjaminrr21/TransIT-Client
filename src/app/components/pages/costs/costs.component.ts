import { Component, OnInit } from '@angular/core';
import { TravelcostService } from 'src/app/services/travelcost.service';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})
export class CostsComponent implements OnInit{
  costs:any[] = []
  constructor(private tcs:TravelcostService){}
  ngOnInit(): void {
      this.getAll()
  }
  getAll(){
this.tcs.getAll().subscribe(
  res => {
    console.log(res)
    this.costs = res;

  },err => console.log(err)
)
  }

}
