import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';



@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: AdminDashboardComponent}
  ])],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
