import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private authService: AuthenService, private router: Router) { }
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true
    } else if (this.authService.isAdmin()) {
      this.router.navigateByUrl('/admin');
      return false;
    } else {
      this.router.navigateByUrl('/loggin');
      return false;
    }
  }
}
