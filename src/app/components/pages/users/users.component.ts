import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any[] = []
  set:Number=0;
  role:string = ""
constructor(private service:EmployeeService){}
ngOnInit(): void {
    this.getAllEmployees()
}
getAllEmployees() {
  this.service.getAllEmployees().subscribe(
    (res) => {
      console.log(res)
      this.users = res;
    },
    err => console.log(err)
  )
}
cancel(){this.set = 0}

setRole(id:number){
this.set = id
  
}
change(id:number){
  this.service.changeRole(id,this.role).subscribe(
    res => {
      console.log(res)
      this.getAllEmployees()
      this.set = 0
    },
    err => console.log(err)
  )
}
}
