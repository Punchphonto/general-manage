import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminJobStatusComponent } from '../admin-dashboard/admin-job-status/admin-job-status.component';
import { AdminJobUpdateComponent } from '../admin-dashboard/admin-job-update/admin-job-update.component';
import { LayoutModule } from '../../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminAuthGuardService } from '../../serivces/auth-services/admin-auth-guard.service';



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
    HttpClientModule
  ],
  providers: [AdminAuthGuardService]
})
export class AdminDashboardModule { }
