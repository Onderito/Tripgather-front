import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { MainCardComponent } from '../../shared/components/main-card/main-card.component';
import { CommonModule } from '@angular/common';
import { EmptyMytripComponent } from '../../shared/components/empty-data/empty-mytrip/empty-mytrip.component';

@Component({
  selector: 'app-favorite-page',
  standalone: true,
  imports: [
    CarouselModule,
    MainCardComponent,
    CommonModule,
    EmptyMytripComponent,
  ],
  templateUrl: './mytrip-page.component.html',
  styleUrl: './mytrip-page.component.scss',
})
export class MytripPageComponent {
  heart: string = '/assets/icons/heart.svg';
  noData: boolean = false;
  carouselValue = [];
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
