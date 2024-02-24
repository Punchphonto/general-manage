import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '../../layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardRequestComponent } from './dashboard-request/dashboard-request.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardRequestComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    FontAwesomeModule,
    NgbNavModule
  ]
})
export class DashboardModule { }
