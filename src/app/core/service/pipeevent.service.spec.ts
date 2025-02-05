import { TestBed } from '@angular/core/testing';

import { PipeeventService } from './pipeevent.service';

describe('PipeeventService', () => {
  let service: PipeeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipeeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
