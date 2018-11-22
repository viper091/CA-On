import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAplicadorComponent } from './make-aplicador.component';

describe('MakeAplicadorComponent', () => {
  let component: MakeAplicadorComponent;
  let fixture: ComponentFixture<MakeAplicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeAplicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAplicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
