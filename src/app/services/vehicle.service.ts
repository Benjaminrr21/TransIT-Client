import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  public url:string = "http://transitprojectapi.somee.com/api/Vehicle"
  constructor(private http:HttpClient) { }

  getAll():Observable<any> {
    return this.http.get(this.url)
  }
  getById(id:Number):Observable<any> {
    return this.http.get(this.url+'/'+id)
  }
  add(p:any):Observable<any> {
    return this.http.post(this.url,p,{
      "headers":new HttpHeaders()
      .set("Content-type","application/json")
      .set("Access-Control-Allow-Origin","*"),
      observe:"response"
    })
  }
  addToTransport(vid:number,tid:number){
    return this.http.put(this.url+'/'+'AddVehicleToTransport/'+vid+'/'+tid,{})

  }
  delete(id:Number) : Observable<any> {
    return this.http.delete(this.url+"/"+id)
  }
}
