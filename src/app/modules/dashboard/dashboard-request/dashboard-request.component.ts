import { Component, OnInit } from '@angular/core';
import { JobDataServiceService } from '../../../serivces/api-services/job-data-service.service'
import { Person, Place, JobStatus, CreateJob } from '../../../models/models'
import { Router, ActivatedRoute } from '@angular/router';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


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
  public jobType: string = '';
  public faPaperPlane = faPaperPlane;
  public isError: boolean = false;
  public errorMsg: string = '';

  constructor(private job: JobDataServiceService, public router: Router, private route: ActivatedRoute) { }

  async ngOnInit() {
    await this.route.paramMap.subscribe(params => {
      this.jobType = String(params.get('job_type'))
    })

    await this.job.getJobStatus(this.jobType).subscribe((res: JobStatus[]) => {
      this.JobStatusList = res;
    })

    await this.job.getPlace(this.jobType).subscribe((res: Place[]) => {
      this.placeList = res;
    })

    await this.job.getPerson(this.jobType).subscribe((res: Person[]) => {
      this.personList = res;
    })
  }

  public showError(errorMsg: string): void {
    this.isError = true
    this.errorMsg = errorMsg
  }

  public async sendRequestJob() {
    const pending = this.JobStatusList.find(status => status.name === 'pending')
    this.jobCreate.status = pending ? pending.id : 1;

    if (!this.jobCreate.request_name) {
      this.showError('please fill in request nmae')
      return
    } else if (!this.jobCreate.telephone) {
      this.showError('please fill in telephone')
      return
    } else if (!this.jobCreate.place) {
      this.showError('please select place')
      return
    } else if (!this.jobCreate.rsponsible_person) {
      this.showError('please rsponsible person')
      return
    } else if (!this.jobCreate.job_topic) {
      this.showError('please Topic')
      return
    } else if (!this.jobCreate.job_detail) {
      this.showError('Detail')
      return
    } else {

      this.job.addNewJobRequest(this.jobCreate, this.jobType).subscribe((res: any) => {
        if (res.success) {
          this.router.navigateByUrl('/');
        }
      })

    }




  }

}
