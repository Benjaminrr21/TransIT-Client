import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  incorrect:boolean = false
  incorrect2:boolean = false
  loading:boolean = false
  public option:boolean = true;
  login: any = {
    
    username:"",
    password:"",
  }
  loginC: any = {
    
    username:"",
    password:"",
  }

  constructor(private service:AuthService, private router:Router){
    

}

loginn(){
  this.loading = true
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
        this.loading = false
      }
    )
}
loginClient(){
  this.loading = true
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
      this.loading = false

    }
  )
}
changeOption(){
  this.option = !this.option;
}


}
