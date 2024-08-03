import { Component, OnInit } from '@angular/core';
import { SignalrService } from './signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(public signalRService:SignalrService) {
  }
  ngOnInit(): void {
      this.signalRService.startConnection();
      this.signalRService.addTransferChartDataListener();
  }

  public sendMessage(user:string,message:string):void{
    this.signalRService.sendMessage(user,message);
  }
  
}
