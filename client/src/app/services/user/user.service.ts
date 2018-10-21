import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) { }
  private apiurl: String = 'http://localhost:3000/api';
  private header = new HttpHeaders({'Content-Type': 'application/json'});

  userregister(data): Observable<any> {
   return this.http.post(this.apiurl + '/user/register', data , {headers : this.header });
  }

  login(data): Observable<any> {
    return this.http.post(this.apiurl + '/user/login', data , {headers : this.header });
  }
  getallUser(): Observable<any> {
    return this.http.get(this.apiurl + '/user/getalluser');
  }
  getuserProfile(): Observable<any> {
    return this.http.get(this.apiurl + '/user/getProfile');
  }

  isAuth(token) {
   return localStorage.setItem('token', token);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  logoutUser() {
    return localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
