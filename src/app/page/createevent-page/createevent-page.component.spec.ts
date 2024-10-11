import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateeventPageComponent } from './createevent-page.component';

describe('CreateeventPageComponent', () => {
  let component: CreateeventPageComponent;
  let fixture: ComponentFixture<CreateeventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateeventPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateeventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
