import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeVacinaComponent } from './make-vacina.component';

describe('MakeVacinaComponent', () => {
  let component: MakeVacinaComponent;
  let fixture: ComponentFixture<MakeVacinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeVacinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeVacinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
