import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Employee} from '../interfaces/employee'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "https://localhost:7286/api/Auth"
  constructor(private http:HttpClient) { }

  registerEmployee(employee:any){
    return this.http.post(this.url+'/register',employee, {
      "headers": new HttpHeaders()
        .set("Content-type","application/json")
        .set("Access-Control-Allow-Origin","*")
    })
  }
  registerClient(client:any):Observable<HttpResponse<any>>{
    return this.http.post(this.url+'/registerclient',client, {
      "headers": new HttpHeaders()
        .set("Content-type","application/json")
        .set("Access-Control-Allow-Origin","*"),
        observe:'response'
    })
  }
  loginEmployee(employee:any): Observable<HttpResponse<any>>{
    return this.http.post(this.url+'/login',employee, {
      "headers": new HttpHeaders()
        .set("Content-type","application/json")
        .set("Access-Control-Allow-Origin","*"),
        observe:"response"
    })
  }
  loginClient(client:any): Observable<HttpResponse<any>>{
    return this.http.post(this.url+"/loginclient",client,{
      "headers": new HttpHeaders()
              .set("Content-type","application/json")
              .set("Access-Control-Allow-Origin","*"),
              observe:"response"
    })
  }
  logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("id");
  }
  isLogedIn(){
    if(sessionStorage.getItem("token")&&sessionStorage.getItem('role')&&sessionStorage.getItem("id")) return true
    return false
  }
  getRole(){
    if(sessionStorage.getItem("role")) return sessionStorage.getItem("role")
    else return "";
  }
}


