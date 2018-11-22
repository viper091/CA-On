import { TestBed, inject } from '@angular/core/testing';

import { VacinaApplyService } from './vacina-apply.service';

describe('VacinaApplyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VacinaApplyService]
    });
  });

  it('should be created', inject([VacinaApplyService], (service: VacinaApplyService) => {
    expect(service).toBeTruthy();
  }));
});
