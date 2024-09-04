import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  url:string = "http://transitprojectapi.somee.com/api/Transport"

  constructor(private http:HttpClient) { }

  add(t:any):Observable<any> {
    return this.http.post(this.url,t)
  }
  getAll():Observable<any> {
    return this.http.get(this.url)
  }
  get(id:number):Observable<any> {
    return this.http.get(this.url+'/'+id)
  }
  getMyRoutes(id:number):Observable<any> {
    return this.http.get(this.url+'/MyRoutes/'+id)
    //return this.http.get("https://localhost:7286/api/Transport/MyRoutes/"+id)
  }
  addVehicleToTransport(vid:number,tid:number):Observable<any>{
    return this.http.put(this.url+'/AddVehicleToTransport/'+vid+'/'+tid,{});
  }
  addDriverToTransport(did:number,tid:number):Observable<any>{
    return this.http.put(this.url+'/AddDriverToTransport/'+did+'/'+tid,{});
  }
  sendRoute(tid:number,did:number) : Observable<any> {
    return this.http.put(this.url+"/SendRoute/"+tid+'/'+did,{})
  }
  finalTransport(tid:number):Observable<any> {
    return this.http.put("http://transitprojectapi.somee.com/api/Transport/FinalTransport/"+tid,{});
  }
}
