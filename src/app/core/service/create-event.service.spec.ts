import { TestBed } from '@angular/core/testing';
import { CreateEventService } from './create-event.service';
import { provideHttpClient } from '@angular/common/http';

describe('CreateEventService', () => {
  let service: CreateEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(CreateEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
