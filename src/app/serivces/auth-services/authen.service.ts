import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  public baseUrl = environment.AUTH_API_URL

  constructor(private http: HttpClient, public router: Router, private route: ActivatedRoute) { }

  public login(username: string, password: string) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const apiUrl = this.baseUrl + "login"
    const body = {
      "username": username,
      "password": password,
    };
    return this.http.post(apiUrl, body, { headers });
  }

  public logout(): void {
    sessionStorage.clear();
    this.router.navigateByUrl('/loggin');
  }

  public isLoggedIn(): boolean {
    const userRole = sessionStorage.getItem('role');
    const userToken = sessionStorage.getItem('token');
    if (userToken && userRole && userRole == 'user') {
      return true
    } else {
      return false
    }
  }

  public isAdmin(): boolean {
    const userRole = sessionStorage.getItem('role')
    const userToken = sessionStorage.getItem('token');
    if (userToken && userRole && userRole == 'admin') {
      return true
    } else {
      return false
    }
  }

}
