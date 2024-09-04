import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-search-drivers',
  templateUrl: './search-drivers.component.html',
  styleUrls: ['./search-drivers.component.css']
})
export class SearchDriversComponent implements OnInit {
  selectedDrivers:any[] = []
  drivers:any[] =[]
  allEmployees:any[] =[]
  co:number = 0
  tid:number = 0
  constructor(private router:Router, private ts:TransportService,private route:ActivatedRoute,private es:EmployeeService){}

  insert(){
     this.selectedDrivers.forEach(el => {
      this.ts.addDriverToTransport(el,this.tid).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/map/'+this.tid]);
        },
        err => console.log(err)
      )
    }); 
 }
 
 getAll(){
  this.es.getAllEmployees().subscribe(
    res => {
      console.log(res)
      this.allEmployees = res
      this.drivers = this.allEmployees.filter(e => e.role=="Driver")

    },
    err => console.log(err)
  )
}
 ngOnInit(): void {
  this.getAll()
  this.tid = this.route.snapshot.params['id']
}
setToList(vid: number, event: any): void {
  if (event.target.checked) {
    this.selectedDrivers.push(vid);
    console.log(this.selectedDrivers)
  } else {
    const index = this.selectedDrivers.indexOf(vid);
    if (index > -1) {
      this.selectedDrivers.splice(index, 1);
    }
    
  }
}

}
