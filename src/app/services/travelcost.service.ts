import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelcostService {

  url:string = "http://transitprojectapi.somee.com/api/TravelCost";
  constructor(private http:HttpClient) { }

  send(tc:any):Observable<any>{
    return this.http.post(this.url,tc);
  }
  getAll():Observable<any>{
    return this.http.get(this.url);
  }
}
