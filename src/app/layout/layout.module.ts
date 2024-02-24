import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbDropdownModule
  ],
  exports: [
    TopBarComponent
]
})
export class LayoutModule { }
