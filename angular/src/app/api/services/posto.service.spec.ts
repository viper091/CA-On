import { TestBed, inject } from '@angular/core/testing';

import { PostoService } from './posto.service';

describe('PostoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostoService]
    });
  });

  it('should be created', inject([PostoService], (service: PostoService) => {
    expect(service).toBeTruthy();
  }));
});
