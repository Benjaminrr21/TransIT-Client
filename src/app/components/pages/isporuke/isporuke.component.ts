import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-isporuke',
  templateUrl: './isporuke.component.html',
  styleUrls: ['./isporuke.component.css']
})
export class IsporukeComponent implements OnInit{
  transports:any[] = []
  isporuke:any[] = []
  constructor(private ts:TransportService){}

  ngOnInit(): void {
      
this.getAll();
  }
  getAll(){
    this.ts.getAll().subscribe(
      res => {
        console.log(res)
        this.transports = res
        this.isporuke = this.transports.filter(t => t.timeEnd != "0001-01-01T00:00:00");
      },err => console.log(err)
    )
  }

}
