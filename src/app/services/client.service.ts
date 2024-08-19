import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public url:string = "https://localhost:7286/api/Client"
  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.url)
  }
  getById(id:Number):Observable<any>{
    return this.http.get(this.url+"/"+id)
  }
}
