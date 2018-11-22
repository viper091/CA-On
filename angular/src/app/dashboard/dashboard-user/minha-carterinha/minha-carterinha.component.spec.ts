import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaCarterinhaComponent } from './minha-carterinha.component';

describe('MinhaCarterinhaComponent', () => {
  let component: MinhaCarterinhaComponent;
  let fixture: ComponentFixture<MinhaCarterinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaCarterinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaCarterinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
