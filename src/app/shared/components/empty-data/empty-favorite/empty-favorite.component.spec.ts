import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyFavoriteComponent } from './empty-favorite.component';

describe('EmptyFavoriteComponent', () => {
  let component: EmptyFavoriteComponent;
  let fixture: ComponentFixture<EmptyFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyFavoriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
