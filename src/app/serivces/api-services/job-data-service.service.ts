import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../../models/models'
import axios from 'axios';

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

}
