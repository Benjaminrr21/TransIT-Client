import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr'

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private hubConnection : signalR.HubConnection;
  constructor() 
  {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('http://transitprojectapi.somee.com/chatHub', {
      skipNegotiation:true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();
   }
   public startConnection():void{
    this.hubConnection
    .start()
    .then(()=> console.log("Connection started"))
    .catch((err) => console.log("Error while connection starting" +err));
   }
   addTransferChartDataListener():void {
    this.hubConnection.on("ReceiveMessage",(user,message) => {
      alert(user+message)
    });
   }
   public sendMessage(user:string, message:string):void {
    this.hubConnection.invoke("SendMessage",user,message)
      .catch((err) => console.log(err))
   }
   public addOrderListener = (callback: (order:any) => void) => {
     this.hubConnection.on("ReceiveOrder",callback)
   }
   public addRequestListener = (callback: (user:any) => void) => {
     this.hubConnection.on("NewRequestForAdmin",callback);
   }
   public addOrderArrivedListener = (callback: (order:any) => void) => {
     this.hubConnection.on("OrderArrived"+sessionStorage.getItem("id"),callback);
   }
   public addRouteArrivedListener = (callback: (route:any) => void) => {
     this.hubConnection.on("NewRouteArrived"+sessionStorage.getItem("id"),callback);
   }
   public addFactureArrivedListener = (callback: (facture:any) => void) => {
     this.hubConnection.on("FactureArrived",callback);
   }
   public addIsporukaArrivedListener = (callback: (isp:any) => void) => {
     this.hubConnection.on("NovaIsporuka",callback);
   }
   public addTravelCostArrivedListener = (callback: (tc:any) => void) => {
     this.hubConnection.on("TravelCostArrived",callback);
   }
}
