import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '../../layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardRequestComponent } from './dashboard-request/dashboard-request.component';
import { DashboardStatusComponent } from './dashboard-status/dashboard-status.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    FontAwesomeModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
