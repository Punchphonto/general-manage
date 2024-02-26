import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenService } from '../../../serivces/auth-services/authen.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName: string = "";
  public password: string = "";


  constructor(public router: Router, private route: ActivatedRoute, public auth: AuthenService) {

  }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  public login(): void {
    if (!this.userName) {
    } else if (!this.password) {
    } else {
      this.auth.login(this.userName, this.password).subscribe((res: any) => {
        if (res.token) {
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('user_id', res.user_id);
          if (res.is_staff) {
            sessionStorage.setItem('role', 'admin');
            this.router.navigateByUrl('/admin')
          } else {
            sessionStorage.setItem('role', 'user');
            this.router.navigateByUrl('/')
          }
        }
      });
    }
  }


}
