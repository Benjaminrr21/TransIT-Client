import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  employee: any = {
    fname:"",
    lname:"",
    email:"",
    phone:"",
    role:"",
    username:"",
    password:"",
    salary:250
  }
  constructor(private service:AuthService){}

  registerEmployee(){
    this.service.registerEmployee(this.employee)
  .subscribe((res) => {
    console.log(res)
  })
  }
}
