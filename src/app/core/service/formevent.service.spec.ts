import { TestBed } from '@angular/core/testing';

import { FormeventService } from './formevent.service';

describe('FormeventService', () => {
  let service: FormeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
