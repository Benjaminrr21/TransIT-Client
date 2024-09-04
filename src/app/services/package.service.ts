import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  public url = "http://transitprojectapi.somee.com/api/Package"
  constructor(private http:HttpClient) {
   }

   getAll():Observable<any>{
     return this.http.get<any[]>(this.url)
   }
  
   delete(id:Number):Observable<any>{
     return this.http.delete(this.url+'/'+id)
   }
   create(p:any):Observable<any>{
     return this.http.post(this.url,p, {
      "headers": new HttpHeaders()
      .set("Content-type","application/json")
      .set("Access-Control-Allow-Origin","*"),
      observe:"response"
     })
   }
   sendByDispatcher(p:any,id:Number):Observable<any>{
     return this.http.post(this.url+'/SendByDispatcher/'+id,p, {
      "headers": new HttpHeaders()
      .set("Content-type","application/json")
      .set("Access-Control-Allow-Origin","*"),
      observe:"response"
     })
   }
   
}
