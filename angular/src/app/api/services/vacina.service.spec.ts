import { TestBed, inject } from '@angular/core/testing';

import { VacinaService } from './vacina.service';

describe('VacinaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VacinaService]
    });
  });

  it('should be created', inject([VacinaService], (service: VacinaService) => {
    expect(service).toBeTruthy();
  }));
});
