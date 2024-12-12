import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyNotificationComponent } from './empty-notification.component';

describe('EmptyNotificationComponent', () => {
  let component: EmptyNotificationComponent;
  let fixture: ComponentFixture<EmptyNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
