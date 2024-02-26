import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateJob } from '../../models/models'


@Injectable({
  providedIn: 'root'
})
export class JobDataServiceService {

  public baseUrl = environment.AUTH_API_URL

  constructor(private http: HttpClient) { }

  public getAllMaintanaceJob(): any {
    const url = this.baseUrl + 'jobrequest/'
    return this.http.get(url);
  }

  public getMaintanaceJobById(jobId: number): any {
    const url = this.baseUrl + 'jobrequest/' + jobId
    return this.http.get(url);
  }

  public getJobStatus(): any {
    const url = this.baseUrl + 'get_job_stats/'
    return this.http.get(url);
  }

  public getPlace(): any {
    const url = this.baseUrl + 'get_place/'
    return this.http.get(url);
  }

  public getPerson(): any {
    const url = this.baseUrl + 'get_person/'
    return this.http.get(url);
  }

  public addNewJobRequest(createJob: CreateJob): any {
    const url = this.baseUrl + 'jobrequest_create';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = createJob;
    return this.http.post(url, body, { headers });
  }

  public updateJobStatus(jobId: number, statusId: number): any {
    const url = this.baseUrl + 'jobrequest_update/' + jobId;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { "status": statusId }
    return this.http.put(url, body, { headers });
  }

}
