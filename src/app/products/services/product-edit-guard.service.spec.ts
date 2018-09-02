import { TestBed, inject } from '@angular/core/testing';

import { ProductEditGuardService } from './product-edit-guard.service';

describe('ProductEditGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductEditGuardService]
    });
  });

  it('should be created', inject([ProductEditGuardService], (service: ProductEditGuardService) => {
    expect(service).toBeTruthy();
  }));
});
