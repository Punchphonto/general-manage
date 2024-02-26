import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestCardComponent } from './request-card/request-card.component';
import { StatusTableComponent } from './status-table/status-table.component';
import { AdminStatusTableComponent } from './admin-status-table/admin-status-table.component';
import { HttpClientModule } from '@angular/common/http';
import { JobDataServiceService } from '../serivces/api-services/job-data-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplaJobIdPipe } from '../pipe/displa-job-id.pipe';



@NgModule({
  declarations: [
    RequestCardComponent,
    StatusTableComponent,
    AdminStatusTableComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FontAwesomeModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    DisplaJobIdPipe
  ],
  exports: [
    StatusTableComponent,
    RequestCardComponent,
    AdminStatusTableComponent
  ],
  providers: [
    JobDataServiceService,

  ]
})
export class ShareComponentModule { }
