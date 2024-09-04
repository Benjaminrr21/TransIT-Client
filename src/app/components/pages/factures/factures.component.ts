import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit{
  factures:any[] = []
constructor(private fs:FactureService){}
ngOnInit(): void {
    this.getAll()
}
getAll(){
  this.fs.getAll().subscribe (
    res => this.factures = res,
    err => console.log(err)
  )
}
}
