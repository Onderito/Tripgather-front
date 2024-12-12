import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-favorite',
  standalone: true,
  imports: [],
  templateUrl: './empty-favorite.component.html',
  styleUrl: './empty-favorite.component.scss',
})
export class EmptyFavoriteComponent {
  favoris: string = 'assets/icons/love-circled.svg';
}
