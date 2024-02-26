import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobStatusComponent } from './admin-job-status.component';

describe('AdminJobStatusComponent', () => {
  let component: AdminJobStatusComponent;
  let fixture: ComponentFixture<AdminJobStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminJobStatusComponent]
    });
    fixture = TestBed.createComponent(AdminJobStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
