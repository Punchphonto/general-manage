import { Component, Input } from '@angular/core';
import { Job } from '../../models/models'
import { JobDataServiceService } from '../../serivces/api-services/job-data-service.service'
import { Router, ActivatedRoute } from '@angular/router';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-status-table',
  templateUrl: './admin-status-table.component.html',
  styleUrls: ['./admin-status-table.component.scss']
})
export class AdminStatusTableComponent {
  @Input() jobType!: string;
  @Input() headersBg: string = '';
  public jobList: Job[] = [];
  public jobListShow: Job[] = [];
  public faPencil = faPencil;
  public page: number = 1;
  public pageSize: number = 5;
  public collectionSize: number = 0;
  constructor(private job: JobDataServiceService, public router: Router, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    await this.getJobList();

  }

  public getJobList(): void {
    this.job.getAllJobs(this.jobType).subscribe((res: Job[]) => {
      this.jobList = res;
      this.collectionSize = res.length;
      this.refreshPage();
    })
  }

  public goToupdatePage(jobId: number): void {
    var route = 'admin/update/' + this.jobType + '/' + jobId
    this.router.navigateByUrl(route);
  }


  public refreshPage() {
    this.jobListShow = this.jobList.map((job, i) => ({ i: i + 1, ...job })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }
}
