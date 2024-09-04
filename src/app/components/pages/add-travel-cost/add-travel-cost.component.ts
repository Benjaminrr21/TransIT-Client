import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelcostService } from 'src/app/services/travelcost.service';

@Component({
  selector: 'app-add-travel-cost',
  templateUrl: './add-travel-cost.component.html',
  styleUrls: ['./add-travel-cost.component.css']
})
export class AddTravelCostComponent implements OnInit {
  tc:any = {
    fuelCost:0,
    customsCost:0,
    carinaCost:0,
    repairCost:0,
    napomena:""
  }
  tid:number = 0
  constructor(private route:ActivatedRoute, private tcs:TravelcostService, private router:Router){}
  ngOnInit(): void {
      this.tid = this.route.snapshot.params['tid']
  }
  send(){
  this.tcs.send(this.tc).subscribe(
    res => {
      console.log(res)
      this.router.navigate(['']);
    },
    err => console.log(err)
  )
  }

}
