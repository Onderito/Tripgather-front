import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-mytrip',
  standalone: true,
  imports: [],
  templateUrl: './empty-mytrip.component.html',
  styleUrl: './empty-mytrip.component.scss',
})
export class EmptyMytripComponent {
  favoris: string = 'assets/icons/empty-heart.svg';
}
