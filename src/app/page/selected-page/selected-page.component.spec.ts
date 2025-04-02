import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { SelectedPageComponent } from './selected-page.component';

describe('SelectedPageComponent', () => {
  let component: SelectedPageComponent;
  let fixture: ComponentFixture<SelectedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedPageComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
