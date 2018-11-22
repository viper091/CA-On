import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplicatorComponent } from './dashboard-applicator.component';

describe('DashboardApplicatorComponent', () => {
  let component: DashboardApplicatorComponent;
  let fixture: ComponentFixture<DashboardApplicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardApplicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApplicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
