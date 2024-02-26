import { Component, Input } from '@angular/core';
import { Job } from '../../models/models'
import { JobDataServiceService } from '../../serivces/api-services/job-data-service.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-status-table',
  templateUrl: './admin-status-table.component.html',
  styleUrls: ['./admin-status-table.component.scss']
})
export class AdminStatusTableComponent {
  @Input() jobType!: string;
  @Input() headersBg: string = '';
  public jobList: Job[] = [];
  constructor(private job: JobDataServiceService, public router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getJobList()
  }

  public getJobList(): void {
    this.job.getAllJobs(this.jobType).subscribe((res: Job[]) => {
      this.jobList = res;
    })
  }

  public goToupdatePage(jobId: number): void {
    var route = 'admin/update/' + this.jobType + '/' + jobId
    console.log(route);

    this.router.navigateByUrl(route);
  }
}
