import { TestBed, inject } from '@angular/core/testing';

import { AplicadorService } from './aplicador.service';

describe('AplicadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AplicadorService]
    });
  });

  it('should be created', inject([AplicadorService], (service: AplicadorService) => {
    expect(service).toBeTruthy();
  }));
});
