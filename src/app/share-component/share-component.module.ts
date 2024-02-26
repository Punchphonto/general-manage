import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestCardComponent } from './request-card/request-card.component';
import { StatusTableComponent } from './status-table/status-table.component';
import { AdminStatusTableComponent } from './admin-status-table/admin-status-table.component';
import { HttpClientModule } from '@angular/common/http';
import { JobDataServiceService } from '../serivces/api-services/job-data-service.service';



@NgModule({
  declarations: [
    RequestCardComponent,
    StatusTableComponent,
    AdminStatusTableComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    StatusTableComponent,
    RequestCardComponent,
    AdminStatusTableComponent
  ],
  providers: [
    JobDataServiceService
  ]
})
export class ShareComponentModule { }
