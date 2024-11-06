import { Component } from '@angular/core';
import { DetailEventComponent } from '../detail-event/detail-event.component';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [DetailEventComponent, CategoryCardComponent, ButtonComponent],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss',
})
export class MainCardComponent {
  fakeData: any = {
    title: 'Australie, séjour en moto',
    start: "Fri Oct 11 2024 00:00:00 GMT+0200 (heure d'été d'Europe centrale)",
    back: "Sat Oct 12 2024 00:00:00 GMT+0200 (heure d'été d'Europe centrale)",
    budget: 3,
    country: {
      admin1: '10',
      admin2: '38098',
      country: 'AR',
      displayName: 'Tumbaya (AR)',
      lat: '-23.85814',
      lng: '-65.46704',
      name: 'Tumbaya',
    },
    editorContent:
      '<p>Venez passer un bon moment avec moi et mes amis en Australie. Au programme, balade en moto et plus !</p>',
    gender: 'Femme',
    nbMember: 2,
    selectedCategories: [
      {
        category: 'music',
        color: 'rgba(255, 0, 0, 0.1)',
        url: 'assets/imgs/music-circle.svg',
      },
      {
        category: 'art & culture',
        color: 'rgba(0, 0, 255, 0.1)',
        url: 'assets/imgs/book.svg',
      },
      {
        category: 'social activities',
        color: 'rgba(0, 128, 0, 0.1)',
        url: 'assets/imgs/gamepad.svg',
      },
      {
        category: 'social activities',
        color: 'rgba(0, 128, 0, 0.1)',
        url: 'assets/imgs/gamepad.svg',
      },
    ],
    url: 'assets/imgs/homeImg.png',
  };
}
