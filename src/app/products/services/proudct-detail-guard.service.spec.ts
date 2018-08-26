import { TestBed, inject } from '@angular/core/testing';

import { ProudctGuardService } from './proudct-guard.service';

describe('ProudctGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProudctGuardService]
    });
  });

  it('should be created', inject([ProudctGuardService], (service: ProudctGuardService) => {
    expect(service).toBeTruthy();
  }));
});
