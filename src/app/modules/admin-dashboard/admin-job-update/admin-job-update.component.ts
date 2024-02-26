import { Component, OnInit } from '@angular/core';
import { Job, JobStatus } from '../../../models/models'
import { JobDataServiceService } from '../../../serivces/api-services/job-data-service.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-job-update',
  templateUrl: './admin-job-update.component.html',
  styleUrls: ['./admin-job-update.component.scss']
})
export class AdminJobUpdateComponent implements OnInit {

  public updateJob!: Job;
  public statusList: JobStatus[] = [];
  public jobType: string = '';
  public jobId: number = 0;
  public updateStatusId!: number

  constructor(private job: JobDataServiceService, public router: Router, private route: ActivatedRoute) {

  }
  async ngOnInit() {

    await this.route.paramMap.subscribe(params => {
      this.jobType = String(params.get('job_type'))
      this.jobId = Number(params.get('job_id'))
    })

    await this.job.getJobStatus().subscribe((res: JobStatus[]) => {
      this.statusList = res
    })

    if (this.jobType == 'maintenance') {
      await this.job.getMaintanaceJobById(this.jobId).subscribe((res: Job) => {
        this.updateJob = res
        this.updateStatusId = res.status
      })
    }

  }

  public updateStatus() {
    this.job.updateJobStatus(this.jobId, this.updateStatusId).subscribe((res: any) => {
      if (res.success) {
        this.router.navigateByUrl('/');
      }
    })
  }
}
