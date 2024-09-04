import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-myroutes',
  templateUrl: './myroutes.component.html',
  styleUrls: ['./myroutes.component.css']
})
export class MyroutesComponent implements OnInit {
  id: number = 0;
  myRoutes:any[] =[]
  routes:any[] =[]

  constructor(private ts: TransportService) {}

  ngOnInit(): void {
    const storedId = sessionStorage.getItem("id");
    if (storedId !== null) {
      this.id = parseInt(storedId, 10);
      if (!isNaN(this.id)) {
        this.getMyRoutes();
      } else {
        console.error("Invalid ID stored in localStorage");
      }
    } else {
      console.error("No ID found in localStorage");
    }
  }

  getMyRoutes(): void {
    this.ts.getMyRoutes(this.id).subscribe(
      res => {
        console.log(res);
        this.routes = res;
        this.myRoutes = this.routes.filter(r => r.driverId == this.id && r.routeSend==true)
      },
      err => {
        console.error("Error fetching routes:", err);
      }
    );
  }
}
