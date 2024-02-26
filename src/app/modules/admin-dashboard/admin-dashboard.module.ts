import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminJobStatusComponent } from '../admin-dashboard/admin-job-status/admin-job-status.component';
import { AdminJobUpdateComponent } from '../admin-dashboard/admin-job-update/admin-job-update.component';
import { LayoutModule } from '../../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminAuthGuardService } from '../../serivces/auth-services/admin-auth-guard.service';
import { ShareComponentModule } from '../../share-component/share-component.module';
import { JobDataServiceService } from '../../serivces/api-services/job-data-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminJobStatusComponent,
    AdminJobUpdateComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    LayoutModule,
    HttpClientModule,
    ShareComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AdminAuthGuardService,
    JobDataServiceService
  ]
})
export class AdminDashboardModule { }
