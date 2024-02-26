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
  public isError: boolean = false;
  public errorMsg: string = "";


  constructor(public router: Router, private route: ActivatedRoute, public auth: AuthenService) {

  }

  ngOnInit(): void {
    sessionStorage.clear();
    this.isError = false;
  }

  public showError(errorMsg: string): void {
    this.isError = true
    this.errorMsg = errorMsg
  }

  public login(): void {
    this.isError = false
    if (!this.userName) {
      this.showError('fill in username')
      return
    } else if (!this.password) {
      this.showError('fill in password')
      return
    } else {
      this.auth.login(this.userName, this.password).subscribe((res: any) => {
        if (res.token && res.success) {
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('user_id', res.user_id);
          sessionStorage.setItem('user_name', res.name);
          if (res.is_staff) {
            sessionStorage.setItem('role', 'admin');
            this.router.navigateByUrl('/admin')
          } else {
            sessionStorage.setItem('role', 'user');
            this.router.navigateByUrl('/')
          }
        }
      }, (error) => {
        this.showError('invalid username or password')
      });
    }
  }


}
