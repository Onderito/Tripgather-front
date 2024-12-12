import { Component } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { MainCardComponent } from '../../shared/components/main-card/main-card.component';
import { EmptyFavoriteComponent } from '../../shared/components/empty-data/empty-favorite/empty-favorite.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-page',
  standalone: true,
  imports: [
    CarouselModule,
    MainCardComponent,
    EmptyFavoriteComponent,
    CommonModule,
  ],
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.scss',
})
export class FavoritePageComponent {
  heart: string = '/assets/icons/heart.svg';
  noData: boolean = false;
  carouselValue = [
    new MainCardComponent(),
    new MainCardComponent(),
    new MainCardComponent(),
    new MainCardComponent(),
  ];
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
