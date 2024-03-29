import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss']
})
export class RequestCardComponent {

  @Input() cardName: string = '';
  @Input() directRoute: string = '';
  @Input() headersBg: string = '';
  public faPaperPlane = faPaperPlane;

  constructor(public router: Router, private route: ActivatedRoute) {
  }

  public gotoRequestJob() {
    this.router.navigateByUrl('/dashboard/request_job/' + this.directRoute);
  }

}
