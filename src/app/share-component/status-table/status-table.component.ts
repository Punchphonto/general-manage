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

    this.getJobList()

  }

  public getJobList() {
    this.job.getAllJobs(this.jobType).subscribe((res: Job[]) => {
      this.jobList = res;
    })
  }
}
