import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EHeaderTitleComponent } from './e-header-title.component';

describe('EHeaderTitleComponent', () => {
  let component: EHeaderTitleComponent;
  let fixture: ComponentFixture<EHeaderTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EHeaderTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EHeaderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
