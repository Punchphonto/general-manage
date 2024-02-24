import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public router: Router, private route: ActivatedRoute) { }

  goToDashboard() {
    this.router.navigateByUrl('/')
  }

}
