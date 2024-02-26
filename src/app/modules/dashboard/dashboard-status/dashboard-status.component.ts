import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobDataServiceService } from '../../../serivces/api-services/job-data-service.service';
import { Job } from '../../../models/models'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard-status',
  templateUrl: './dashboard-status.component.html',
  styleUrls: ['./dashboard-status.component.scss']
})
export class DashboardStatusComponent implements OnInit {
  public active = 1;
  public maintenanceJob: Job[] = [];
  public faClipboard = faClipboardList;

  constructor(public router: Router, private route: ActivatedRoute, private job: JobDataServiceService) { }

  async ngOnInit() {
  }
}
