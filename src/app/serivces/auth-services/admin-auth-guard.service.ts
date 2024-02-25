import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private authService: AuthenService, private router: Router) { }
  canActivate(): boolean {
    if (this.authService.isAdmin()) {
      return true
    } else if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
      return false;
    } else {
      this.router.navigateByUrl('/loggin');
      return false;
    }
  }
}
