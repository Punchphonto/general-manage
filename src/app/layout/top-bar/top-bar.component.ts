import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../serivces/auth-services/authen.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  public current_user: string = '';

  constructor(public auth: AuthenService) {

  }

  ngOnInit(): void {
    this.current_user = String(sessionStorage.getItem('user_name'));
  }

  public logOut() {
    this.auth.logout()
  }
}
