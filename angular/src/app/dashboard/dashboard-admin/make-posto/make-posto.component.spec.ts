import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePostoComponent } from './make-posto.component';

describe('MakePostoComponent', () => {
  let component: MakePostoComponent;
  let fixture: ComponentFixture<MakePostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakePostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakePostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
