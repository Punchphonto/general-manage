import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRequestComponent } from './dashboard-request/dashboard-request.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '', component: DashboardComponent,
      children: [
        { path: '', component: DashboardRequestComponent },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
