import { TestBed, inject } from '@angular/core/testing';

import { HistoricosService } from './historicos.service';

describe('HistoricosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoricosService]
    });
  });

  it('should be created', inject([HistoricosService], (service: HistoricosService) => {
    expect(service).toBeTruthy();
  }));
});
