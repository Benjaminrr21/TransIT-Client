import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:any[] = []
  constructor(private cs:ClientService){}

  getAll(){
    this.cs.getAll().subscribe(
      res => this.clients = res,
      err => console.log(err)
    )
  }
  ngOnInit(): void {
      this.getAll()
  }

}
