import { Component } from '@angular/core';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
})
export class CategoryCardComponent {
  ball: string = 'assets/imgs/ball.svg';
  book: string = 'assets/imgs/book.svg';
  gamepad: string = 'assets/imgs/gamepad.svg';
  music: string = 'assets/imgs/music-circle.svg';
  artCulture: string = 'assets/imgs/art-culture.svg';
  hobbies: string = 'assets/imgs/hobbies.svg';
  spirituality: string = 'assets/imgs/spirituality.svg';
  socialActivity: string = 'assets/imgs/social-activity.svg';
}
