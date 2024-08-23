import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string = "https://localhost:7286/api/Item";

  constructor(private http:HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get("https://localhost:7286/api/Item")
  }
  add(item:any):Observable<any>{
    return this.http.post(this.url,item,{
      "headers":new HttpHeaders()
      .set("Content-type","application/json")
      .set("Access-Control-Allow-Origin","*")
    })
  }
}
