import { TestBed } from '@angular/core/testing';

import { LazyLoaderServiceService } from './lazy-loader-service.service';

describe('LazyLoaderServiceService', () => {
  let service: LazyLoaderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyLoaderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
