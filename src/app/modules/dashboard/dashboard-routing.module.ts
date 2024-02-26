import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRequestComponent } from './dashboard-request/dashboard-request.component';
import { DashboardStatusComponent } from './dashboard-status/dashboard-status.component';
import { AuthGuardService } from '../../serivces/auth-services/auth-guard.service';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '', component: DashboardComponent,
      children: [
        { path: '', component: DashboardStatusComponent, canActivate: [AuthGuardService] },
        { path: 'request_job/:job_type', component: DashboardRequestComponent, canActivate: [AuthGuardService] },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
