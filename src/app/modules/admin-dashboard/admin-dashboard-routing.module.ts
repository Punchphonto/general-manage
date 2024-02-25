import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminJobStatusComponent } from '../admin-dashboard/admin-job-status/admin-job-status.component';
import { AdminJobUpdateComponent } from '../admin-dashboard/admin-job-update/admin-job-update.component';
import { AdminAuthGuardService } from '../../serivces/auth-services/admin-auth-guard.service';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '', component: AdminDashboardComponent,
      children: [
        { path: '', component: AdminJobStatusComponent, canActivate: [AdminAuthGuardService] },
        { path: 'update/:job_id/:job_type', component: AdminJobUpdateComponent, canActivate: [AdminAuthGuardService] },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
