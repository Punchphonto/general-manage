import { Component, OnInit } from '@angular/core';
import { Job, JobStatus } from '../../../models/models'
import { JobDataServiceService } from '../../../serivces/api-services/job-data-service.service'
import { Router, ActivatedRoute } from '@angular/router';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-job-update',
  templateUrl: './admin-job-update.component.html',
  styleUrls: ['./admin-job-update.component.scss']
})
export class AdminJobUpdateComponent implements OnInit {

  public updateJob: Job = new Job();
  public statusList: JobStatus[] = [];
  public jobType: string = '';
  public jobId: number = 0;
  public updateStatusId!: number
  public faPaperPlane = faPaperPlane;

  constructor(private job: JobDataServiceService, public router: Router, private route: ActivatedRoute) {

  }
  async ngOnInit() {
    await this.route.paramMap.subscribe(params => {
      this.jobType = String(params.get('job_type'))
      this.jobId = Number(params.get('job_id'))
    })
    await this.job.getJobStatus(this.jobType).subscribe((res: JobStatus[]) => {
      this.statusList = res
    })
    await this.job.getMaintanaceJobById(this.jobId, this.jobType).subscribe((res: Job) => {
      this.updateJob = res
      this.updateStatusId = res.status
    })
  }

  public updateStatus() {
    this.job.updateJobStatus(this.jobId, this.updateStatusId, this.jobType).subscribe((res: any) => {
      if (res.success) {
        this.router.navigateByUrl('/');
      }
    })
  }
}
