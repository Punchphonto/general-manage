import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../models/models'
import { JobDataServiceService } from '../../serivces/api-services/job-data-service.service'


@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit {
  @Input() jobType!: string;
  public jobList: Job[] = [];

  constructor(private job: JobDataServiceService) {

  }

  ngOnInit(): void {
    if (this.jobType == 'maintenance') {
      this.getJobListMaintenance()
    }
  }

  public getJobListMaintenance() {
    this.job.getAllMaintanaceJob().subscribe((res: Job[]) => {
      this.jobList = res;
    })
  }
}
