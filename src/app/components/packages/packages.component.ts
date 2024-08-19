import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  packages:any[] = []
  constructor(private service:PackageService){
  }
  ngOnInit(): void {
      this.service.getAll()
        .subscribe((res) =>{ 
          console.log(res);
          this.packages = res
        },
        error => console.log(error) 
        )}
}
