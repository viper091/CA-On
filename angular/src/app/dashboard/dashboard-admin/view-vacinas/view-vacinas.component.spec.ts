import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVacinasComponent } from './view-vacinas.component';

describe('ViewVacinasComponent', () => {
  let component: ViewVacinasComponent;
  let fixture: ComponentFixture<ViewVacinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVacinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVacinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
