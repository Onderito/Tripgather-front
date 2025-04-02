import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { PipeeventService } from './pipeevent.service';

describe('PipeeventService', () => {
  let service: PipeeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(PipeeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
