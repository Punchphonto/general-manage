import { Component } from '@angular/core';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-job-status',
  templateUrl: './admin-job-status.component.html',
  styleUrls: ['./admin-job-status.component.scss']
})
export class AdminJobStatusComponent {
  public faClipboard = faUserShield;
}
