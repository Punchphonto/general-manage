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
  public jobListShow: Job[] = [];
  public page: number = 1;
  public pageSize: number = 5;
  public collectionSize: number = 0;

  constructor(private job: JobDataServiceService) {

  }

  ngOnInit(): void {
    this.getJobList()
  }

  public getJobList() {
    this.job.getAllJobs(this.jobType).subscribe((res: Job[]) => {
      this.jobList = res;
      this.collectionSize = res.length;
      this.refreshPage()
    })
  }


  public refreshPage() {
    this.jobListShow = this.jobList.map((job, i) => ({ i: i + 1, ...job })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }
}
