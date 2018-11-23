import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAplicadoresComponent } from './view-aplicadores.component';

describe('ViewAplicadoresComponent', () => {
  let component: ViewAplicadoresComponent;
  let fixture: ComponentFixture<ViewAplicadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAplicadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAplicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
