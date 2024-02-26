import { Component, OnInit } from '@angular/core';
import { JobDataServiceService } from '../../../serivces/api-services/job-data-service.service'
import { Person, Place, JobStatus, CreateJob } from '../../../models/models'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard-request',
  templateUrl: './dashboard-request.component.html',
  styleUrls: ['./dashboard-request.component.scss']
})
export class DashboardRequestComponent implements OnInit {

  public JobStatusList: JobStatus[] = [];
  public placeList: Place[] = [];
  public personList: Person[] = [];
  public jobCreate: CreateJob = new CreateJob();

  constructor(private job: JobDataServiceService, public router: Router, private route: ActivatedRoute) { }

  async ngOnInit() {

    await this.job.getJobStatus().subscribe((res: JobStatus[]) => {
      this.JobStatusList = res;
    })

    await this.job.getPlace().subscribe((res: Place[]) => {
      this.placeList = res;
    })

    await this.job.getPerson().subscribe((res: Person[]) => {
      this.personList = res;
    })
  }

  public async sendRequestJob() {
    const pending = this.JobStatusList.find(status => status.name === 'pending')
    this.jobCreate.status = pending ? pending.id : 1;

    if (!this.jobCreate.request_name) {

    } else if (!this.jobCreate.telephone) {

    } else if (!this.jobCreate.place) {

    } else if (!this.jobCreate.rsponsible_person) {

    } else if (!this.jobCreate.job_topic) {

    } else if (!this.jobCreate.job_detail) {

    } else {

      this.job.addNewJobRequest(this.jobCreate).subscribe((res: any) => {
        if (res.success) {
          this.router.navigateByUrl('/');
        }
      })

    }




  }

}
