import { Component } from '@angular/core';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-job-status',
  templateUrl: './admin-job-status.component.html',
  styleUrls: ['./admin-job-status.component.scss']
})
export class AdminJobStatusComponent {
  public faClipboard = faClipboardList;
}
