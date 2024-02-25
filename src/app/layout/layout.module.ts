import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AuthenService } from '../serivces/auth-services/authen.service';



@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbDropdownModule,
    HttpClientModule
  ],
  exports: [
    TopBarComponent
  ],
  providers: [AuthenService]
})
export class LayoutModule { }
