import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { SignalrService } from './services/signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isVisible:boolean = false
  constructor(public signalRService:SignalrService,public ord:OrderService, public service:AuthService, private router:Router) {
  }
  ngOnInit(): void {
    this.ord.getAll().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
      this.signalRService.startConnection();
      if(sessionStorage.getItem("role") == "Dispecer"){
      this.signalRService.addOrderListener((order) => {
        console.log("Stigla je nova narudzbina!");
        this.set();
        
      })
     
    }
      this.signalRService.addTransferChartDataListener();
      this.ord.getAll().subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    this.proba();
  }
  

  public sendMessage(user:string,message:string):void{
    this.signalRService.sendMessage(user,message);
  }
  logout(){
    this.service.logout();
    this.router.navigate([''])
  }
  proba(){
    this.service.proba().subscribe(
      res => console.log(res),
      error => console.log(error)
    )
  }
  getRole(){
    return this.service.getRole();
  }
  set(){
    this.isVisible = true
  }
  

 

  
}
