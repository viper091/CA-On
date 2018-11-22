import { TestBed, inject } from '@angular/core/testing';

import { AdminCentralService } from './admin-central.service';

describe('AdminCentralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminCentralService]
    });
  });

  it('should be created', inject([AdminCentralService], (service: AdminCentralService) => {
    expect(service).toBeTruthy();
  }));
});
