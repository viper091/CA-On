import { TestBed, inject } from '@angular/core/testing';

import { CarterinhaService } from './carterinha.service';

describe('CarterinhaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarterinhaService]
    });
  });

  it('should be created', inject([CarterinhaService], (service: CarterinhaService) => {
    expect(service).toBeTruthy();
  }));
});
