import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '../../layout/layout.module';
import { ShareComponentModule } from '../../share-component/share-component.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardRequestComponent } from './dashboard-request/dashboard-request.component';
import { DashboardStatusComponent } from './dashboard-status/dashboard-status.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from '../../serivces/auth-services/auth-guard.service';
import { JobDataServiceService } from '../../serivces/api-services/job-data-service.service';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardRequestComponent,
    DashboardStatusComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    ShareComponentModule,
    FontAwesomeModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    JobDataServiceService
  ]
})
export class DashboardModule { }
