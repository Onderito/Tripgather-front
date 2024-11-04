import { Component, Input } from '@angular/core';
import { FormeventService } from '../../../../core/service/formevent.service.js';
import { CategoryCardComponent } from '../../category-card/category-card.component';
import { DetailEventComponent } from '../../detail-event/detail-event.component';

@Component({
  selector: 'app-final-step',
  standalone: true,
  imports: [CategoryCardComponent, DetailEventComponent],
  templateUrl: './final-step.component.html',
  styleUrl: './final-step.component.scss',
})
export class FinalStepComponent {
  receivedData: any;
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
      'Venez passer un bon moment avec moi et mes  amis en Australie. Au programme, balade en moto et plus !  ',
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
    url: 'assets/imgs/travel-final-step.svg',
  };
  @Input() scale: number = 0;

  constructor(private formEvent: FormeventService) {}

  ngOnInit() {
    this.formEvent.data$.subscribe((data) => {
      this.receivedData = data;
      console.log(this.receivedData);
    });
  }
}
