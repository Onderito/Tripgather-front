import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardEventComponent } from './create-card-event.component';

describe('CreateCardEventComponent', () => {
  let component: CreateCardEventComponent;
  let fixture: ComponentFixture<CreateCardEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCardEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCardEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
