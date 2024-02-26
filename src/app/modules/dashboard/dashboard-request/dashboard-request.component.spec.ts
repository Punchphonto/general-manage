import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRequestComponent } from './dashboard-request.component';

describe('DashboardRequestComponent', () => {
  let component: DashboardRequestComponent;
  let fixture: ComponentFixture<DashboardRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardRequestComponent]
    });
    fixture = TestBed.createComponent(DashboardRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
