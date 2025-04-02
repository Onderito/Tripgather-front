import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationPageComponent } from './notification-page.component';
import { provideHttpClient } from '@angular/common/http';

describe('NotificationPageComponent', () => {
  let component: NotificationPageComponent;
  let fixture: ComponentFixture<NotificationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationPageComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
