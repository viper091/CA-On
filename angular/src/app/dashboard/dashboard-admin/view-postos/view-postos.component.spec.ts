import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostosComponent } from './view-postos.component';

describe('ViewPostosComponent', () => {
  let component: ViewPostosComponent;
  let fixture: ComponentFixture<ViewPostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPostosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
