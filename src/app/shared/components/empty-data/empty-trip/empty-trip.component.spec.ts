import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTripComponent } from './empty-trip.component';

describe('EmptyTripComponent', () => {
  let component: EmptyTripComponent;
  let fixture: ComponentFixture<EmptyTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyTripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
