import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests:any[] = []
  requests2:any[] = []
  constructor(private es:EmployeeService){}
  ngOnInit(): void {
      this.getAll()
  }

  getAll(){
    this.es.getAllEmployees().subscribe(
      res => {
        console.log(res),
        this.requests = res;
        this.requests2 = this.requests.filter(r => r.isAccepted == false)

      }
    )
  }
  accept(id:Number) {
    this.es.accept(id).subscribe(
      res =>{ 
        console.log(res)
        this.requests2 = this.requests2.filter(r => r.id != id)

      },
      err => console.log(err)
    )
  }
  decline(id:Number) {
    this.es.decline(id).subscribe(
      (res) => {
         console.log(res)
         this.requests2 = this.requests2.filter(r => r.id != id)
        },
      err => console.log(err)
    )
  }

}
