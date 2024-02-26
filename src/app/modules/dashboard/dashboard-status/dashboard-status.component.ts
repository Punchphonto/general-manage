import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobDataServiceService } from '../../../serivces/api-services/job-data-service.service';
import { Job } from '../../../models/models'


@Component({
  selector: 'app-dashboard-status',
  templateUrl: './dashboard-status.component.html',
  styleUrls: ['./dashboard-status.component.scss']
})
export class DashboardStatusComponent implements OnInit {
  public active = 1;
  public maintenanceJob: Job[] = [];

  constructor(public router: Router, private route: ActivatedRoute, private job: JobDataServiceService) { }

  async ngOnInit() {
  }
}
