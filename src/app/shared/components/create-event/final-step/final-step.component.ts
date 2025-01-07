import { Component, Input } from '@angular/core';
import { FormeventService } from '../../../../core/service/utils/formevent.service.js';
import { CategoryCardComponent } from '../../category-card/category-card.component';
import { DetailEventComponent } from '../../detail-event/detail-event.component';
import { ButtonComponent } from '../../utils/button/button.component.js';
import { EventHeaderComponent } from '../../event-header/event-header.component';
import { CreateEventService } from '../../../../core/service/create-event.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-step',
  standalone: true,
  imports: [
    CategoryCardComponent,
    DetailEventComponent,
    ButtonComponent,
    EventHeaderComponent,
  ],
  templateUrl: './final-step.component.html',
  styleUrl: './final-step.component.scss',
})
export class FinalStepComponent {
  receivedData: any;
  blob: string = 'assets/blob/blob.svg';
  // fakeData: any = {
  //   title: 'Australie',
  //   start: "Fri Oct 11 2024 00:00:00 GMT+0200 (heure d'été d'Europe centrale)",
  //   back: "Sat Oct 12 2024 00:00:00 GMT+0200 (heure d'été d'Europe centrale)",
  //   budget: 3,
  //   country: {
  //     admin1: '10',
  //     admin2: '38098',
  //     country: 'AR',
  //     displayName: 'Tumbaya (AR)',
  //     lat: '-23.85814',
  //     lng: '-65.46704',
  //     name: 'Tumbaya',
  //   },
  //   editorContent:
  //     'Venez passer un bon moment avec moi et mes  amis en Australie. Au programme, balade en moto et plus !  ',
  //   gender: 'Femme',
  //   nbMember: 2,
  //   selectedCategories: [
  //     {
  //       category: 'Music',
  //       color: 'rgba(255, 0, 0, 0.1)',
  //       url: 'assets/imgs/music-circle.svg',
  //     },
  //     {
  //       category: 'Art & culture',
  //       color: 'rgba(0, 0, 255, 0.1)',
  //       url: 'assets/imgs/book.svg',
  //     },
  //     {
  //       category: 'Social activities',
  //       color: 'rgba(0, 128, 0, 0.1)',
  //       url: 'assets/imgs/gamepad.svg',
  //     },
  //     {
  //       category: 'Social activities',
  //       color: 'rgba(0, 128, 0, 0.1)',
  //       url: 'assets/imgs/gamepad.svg',
  //     },
  //   ],
  //   url: 'assets/imgs/travel-final-step.svg',
  // };
  @Input() scale: number = 0;

  constructor(private formEvent: FormeventService,private createEventService: CreateEventService,private router: Router) {}

  ngOnInit() {
    this.formEvent.data$.subscribe((data) => {
      this.receivedData = data;
        });
  }

  sendData() {
    if (this.receivedData) {
      const transformedData: any = {
        title: this.receivedData.title,
        status: 'PUBLISHED',
        localisation: this.receivedData.country?.name || 'Inconnue',
        startRegistration: this.formatDate(this.receivedData.start),
        endRegistration: this.formatDate(this.receivedData.back),
        fromDate: this.formatDate(this.receivedData.start),
        toDate: this.formatDate(this.receivedData.back),
        maxParticipant: this.receivedData.nbMember || 0,
        price: this.receivedData.budget ? `${this.receivedData.budget} €` : 'Gratuit',
        description: this.receivedData.editorContent || '',
        owner: 1,
        imgUrl: Array.isArray(this.receivedData.url) ? this.receivedData.url : [this.receivedData.url],
        categories: this.receivedData.selectedCategories?.map((cat: any) => ({ id: cat.id })) || [],
        gender: this.mapGender(this.receivedData.gender),
        mixte: this.receivedData.gender === 'Mixte'
      };
  
      delete transformedData.start;
      delete transformedData.end;
  
      this.createEventService.createEvent(transformedData).subscribe(
        (createdEvent) => {
          alert('Event created successfully!');
          
          setTimeout(() => {
            this.router.navigate(['/home']);
            this.formEvent.clearData();
          }, 500); 
        },
        (error) => {
          console.error('Erreur lors de la création de l\'événement :', error);
        }
      );
    }
  }
  
  
  
  private mapGender(gender: string): string {
    switch (gender) {
      case 'Mixte':
        return 'MIXTE';
      case 'Homme':
        return 'HOMME';
      case 'Femme':
        return 'FEMME';
      default:
        return 'UNKNOWN';
    }
  }
  
  formatDate(date: Date): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  
}
