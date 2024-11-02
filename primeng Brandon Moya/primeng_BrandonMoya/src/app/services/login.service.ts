import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
apiUrl = "https://localhost:7013/api/Users";
constructor(private http:HttpClient) {}
  login(username:string, password:string):Observable<any>{
    const body = {username,password};
    return this.http.post(`${this.apiUrl}/login`,{username,password})
  }

  register(username:string ,password:string ):Observable<any>{
    const body= {username,password}
    return this.http.post(`${this.apiUrl}/register`,{username,password})
  }
}
