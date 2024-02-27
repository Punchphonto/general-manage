import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateJob } from '../../models/models'


@Injectable({
  providedIn: 'root'
})
export class JobDataServiceService {

  public maintennanceBaseUrl = environment.MAINTAINNACE_API_URL
  public housekeeperBaseUrl = environment.HOUSEKEEPER_API_URL

  constructor(private http: HttpClient) { }

  public getAllJobs(jobtype: string): any {
    var url = ''
    if (jobtype == 'maintenance') {
      url = this.maintennanceBaseUrl + 'jobrequest/'
    } else {
      url = this.housekeeperBaseUrl + 'jobrequest/'
    }
    return this.http.get(url);
  }

  public getMaintanaceJobById(jobId: number, jobtype: string): any {
    var url = ''
    if (jobtype == 'maintenance') {
      url = this.maintennanceBaseUrl + 'jobrequest/' + jobId
    } else {
      url = this.housekeeperBaseUrl + 'jobrequest/' + jobId
    }
    return this.http.get(url);
  }

  public getJobStatus(jobtype: string): any {
    var url = ''
    if (jobtype == 'maintenance') {
      url = this.maintennanceBaseUrl + 'get_job_stats/'
    } else {
      url = this.housekeeperBaseUrl + 'get_job_stats/'
    }
    return this.http.get(url);
  }

  public getPlace(jobtype: string): any {
    var url = ''
    if (jobtype == 'maintenance') {
      url = this.maintennanceBaseUrl + 'get_place/'
    } else {
      url = this.housekeeperBaseUrl + 'get_place/'
    }
    return this.http.get(url);
  }

  public getPerson(jobtype: string): any {
    var url = ''
    if (jobtype == 'maintenance') {
      url = this.maintennanceBaseUrl + 'get_person/'
    } else {
      url = this.housekeeperBaseUrl + 'get_person/'
    }
    return this.http.get(url);
  }

  public addNewJobRequest(createJob: CreateJob, jobtype: string): any {
    var url = ''
    if (jobtype == 'maintenance') {
      url = this.maintennanceBaseUrl + 'jobrequest_create'
    } else {
      url = this.housekeeperBaseUrl + 'jobrequest_create'
    }
    const userToken = String(sessionStorage.getItem('token'));
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    var body = createJob;
    body.token = userToken
    return this.http.post(url, body, { headers });
  }

  public updateJobStatus(jobId: number, statusId: number, jobtype: string): any {
    var url = ''
    if (jobtype == 'maintenance') {
      url = this.maintennanceBaseUrl + 'jobrequest_update/' + jobId;
    } else {
      url = this.housekeeperBaseUrl + 'jobrequest_update/' + jobId;
    }
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const userToken = String(sessionStorage.getItem('token'));
    const body = { "status": statusId, "token": userToken }
    return this.http.put(url, body, { headers });
  }

}
