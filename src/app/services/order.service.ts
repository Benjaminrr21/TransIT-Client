import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public url:string = "http://transitprojectapi.somee.com/api/Order";
 // public url2:string = "http://localhost:7628/api/Order";
  //public url:string = "http://hostproject2024-001-site1.ftempurl.com/api/Order";
  //public url:string = "http://projectis-001-site1.atempurl.com/WeatherForecast";
  //public url:string = "http://parkeasyproject.somee.com/api/Zone";

  constructor(private http:HttpClient) { }
  getAll():Observable<any> {
    return this.http.get(this.url,{
      "headers":new HttpHeaders()
        .set("Content-Type","application/json")
    })
  }
  getById(id:Number):Observable<any> {
    return this.http.get(this.url+'/'+id)
  }
  addOrderToTransport(oid:number,tid:number){
    return this.http.put(this.url+'/'+'AddOrderToTransport/'+oid+'/'+tid,{})
  }
  add(p:any):Observable<any> {
    return this.http.post(this.url,p,{
      "headers":new HttpHeaders()
      .set("Content-type","application/json")
      .set("Access-Control-Allow-Origin","*"),
      observe:"response"
    })
  }
  sendFromClient(id:Number):Observable<any> {
    return this.http.post(this.url+'/SendFromClient/'+id,{
      "headers":new HttpHeaders()
      .set("Content-type","application/json")
      .set("Access-Control-Allow-Origin","*"),
      observe:"response"
    })
  }
  delete(id:Number) : Observable<any> {
    return this.http.delete(this.url+"/"+id)
  }
  addWeight(id:Number,weight:Number):Observable<any>{
    return this.http.put(this.url+'/AddWeight/'+id+'/'+weight,{});
  }
}
