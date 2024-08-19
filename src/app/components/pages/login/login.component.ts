import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  incorrect:boolean = false
  incorrect2:boolean = false

  constructor(private service:AuthService, private router:Router){
  }

  public option:boolean = true;
  employee: any = {
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    role:"",
    username:"",
    password:"",
    salary:250
  }
  client: any = {
    
    pib:"",
    companyName:"",
    email:"",
    phone:"",
    contactPerson:"",
    username:"",
    password:""
    }
  login: any = {
    
    username:"",
    password:"",
  }
  loginC: any = {
    
    username:"",
    password:"",
  }

  registerEmployee(){
    this.service.registerEmployee(this.employee)
  .subscribe((res) => {
    console.log(this.employee)
    console.log(res)
  })
  }
  registerClient(){
    this.service.registerClient(this.client)
    .subscribe(
      (res) => console.log(res),
      err => console.log(err)
    )
  }
  loginn(){
    this.service.loginEmployee(this.login)
      .subscribe(
        (res:HttpResponse<any>) => {
          console.log(res)
          this.incorrect=false
          
          sessionStorage.setItem("token",res.body.token)
          sessionStorage.setItem("role",res.body.user.role)
          sessionStorage.setItem("id",res.body.user.id)
          
          this.router.navigate([''])
                },
        err => {
          console.log(err)
          this.incorrect = true
        }
      )
  }
  loginClient(){
    this.service.loginClient(this.loginC)
    .subscribe(
      res => {
        console.log(res),
        this.incorrect2 = false
        sessionStorage.setItem("token",res.body.token)
        sessionStorage.setItem("role",res.body.role)
        sessionStorage.setItem("id",res.body.user.id)
          
          this.router.navigate([''])
      },
      err => {
        console.log(err)
        this.incorrect2 = true;
      }
    )
  }

  

  changeOption(){
    this.option = !this.option;
  }
}
