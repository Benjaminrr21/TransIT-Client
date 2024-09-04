import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<any>{
    return this.http.get("http://transitprojectapi.somee.com/api/Auth")
  }
  accept(id:Number):Observable<any> {
    return this.http.post("http://transitprojectapi.somee.com/api/Auth/accept-employee/"+id,{})
  }
  decline(id:Number):Observable<any> {
    return this.http.delete("http://transitprojectapi.somee.com/api/Auth/decline-employee/"+id,{})

  }
  changeRole(id:Number, role:string):Observable<any>{
    return this.http.post("http://transitprojectapi.somee.com/api/Auth/change-role/"+id+"/"+role,{})
  }
}
