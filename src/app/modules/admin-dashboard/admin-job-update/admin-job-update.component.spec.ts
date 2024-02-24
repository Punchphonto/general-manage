import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobUpdateComponent } from './admin-job-update.component';

describe('AdminJobUpdateComponent', () => {
  let component: AdminJobUpdateComponent;
  let fixture: ComponentFixture<AdminJobUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminJobUpdateComponent]
    });
    fixture = TestBed.createComponent(AdminJobUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
