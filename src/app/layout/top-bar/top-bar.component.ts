import { Component } from '@angular/core';
import { AuthenService } from '../../serivces/auth-services/authen.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  constructor(public auth: AuthenService) {

  }

  logOut() {
    this.auth.logout()
  }
}
