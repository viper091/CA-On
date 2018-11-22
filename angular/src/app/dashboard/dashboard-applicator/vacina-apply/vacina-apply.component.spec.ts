import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinaApplyComponent } from './vacina-apply.component';

describe('VacinaApplyComponent', () => {
  let component: VacinaApplyComponent;
  let fixture: ComponentFixture<VacinaApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacinaApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinaApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
