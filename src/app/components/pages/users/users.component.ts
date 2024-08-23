import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any[] = []
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
}
