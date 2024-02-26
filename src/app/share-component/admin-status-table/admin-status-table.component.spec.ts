import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatusTableComponent } from './admin-status-table.component';

describe('AdminStatusTableComponent', () => {
  let component: AdminStatusTableComponent;
  let fixture: ComponentFixture<AdminStatusTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminStatusTableComponent]
    });
    fixture = TestBed.createComponent(AdminStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
