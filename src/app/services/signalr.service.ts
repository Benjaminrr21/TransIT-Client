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
    .withUrl('https://localhost:7286/chatHub', {
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
}
