import { TestBed } from '@angular/core/testing';

import { FinderService } from './finder.service';

describe('FinderService', () => {
  let service: FinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
