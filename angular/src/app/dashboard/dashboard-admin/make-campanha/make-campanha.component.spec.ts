import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCampanhaComponent } from './make-campanha.component';

describe('MakeCampanhaComponent', () => {
  let component: MakeCampanhaComponent;
  let fixture: ComponentFixture<MakeCampanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeCampanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
