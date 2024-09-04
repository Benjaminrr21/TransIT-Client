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
  isVisible2:boolean = false //zahtevi za registraciju
  arrivedd:boolean = false
  arrivedd2:boolean = false
  facture:boolean = false
  isp:boolean = false
  tc:boolean = false

  constructor(public signalRService:SignalrService,public ord:OrderService, public service:AuthService, private router:Router) {
  }
  arrived(){
    this.arrivedd = true
  }
  routeArrived(){
    this.arrivedd2 = true
  }
  factureArrived(){
    this.facture = true
  }
  isporukaArrived(){
    this.isp = true
  }
  travelCostArrived(){
    this.tc = true
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
      if(sessionStorage.getItem("role") == "Admin"){
        this.signalRService.addRequestListener((user) => {
          console.log("Novi zahtev za registraciju zaposlenog!");
          this.setRequests();
          
        })
       
      }
      if(sessionStorage.getItem("role") == "Client"){
        this.signalRService.addOrderArrivedListener((order) => {
          console.log("Stigla je vasa porudzbina!");
          this.arrived()
          
        })
       
      }
      if(sessionStorage.getItem("role") == "Driver"){
        this.signalRService.addRouteArrivedListener((route) => {
          console.log("Stigla je nova ruta!");
          this.routeArrived()
          
        })
       
      }
      if(sessionStorage.getItem("role") == "Client"){
        this.signalRService.addFactureArrivedListener((fact) => {
          console.log("Stigla je nova faktura!");
          this.factureArrived()
          
        })
       
      }
      if(sessionStorage.getItem("role") == "Manager"){
        this.signalRService.addIsporukaArrivedListener((isp) => {
          console.log("Stigla je nova isporuka!");
          this.isporukaArrived()
          
        })
       
      }
      if(sessionStorage.getItem("role") == "Manager"){
        this.signalRService.addTravelCostArrivedListener((tc) => {
          console.log("Stigao je novi putni trosak!");
          this.travelCostArrived()
          
        })
       
      }
    
      
      this.signalRService.addTransferChartDataListener();
      this.ord.getAll().subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

  
  

  public sendMessage(user:string,message:string):void{
    this.signalRService.sendMessage(user,message);
  }
  logout(){
    this.service.logout();
    this.router.navigate([''])
  }
  
  getRole(){
    return this.service.getRole();
  }
  set(){
    this.isVisible = true
  }
  setRequests(){
    this.isVisible2 = true;
  }
  

 

  
}
