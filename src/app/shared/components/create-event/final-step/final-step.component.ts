import { Component, Input } from '@angular/core';
import { FormeventService } from '../../../../core/service/utils/formevent.service';
import { CategoryCardComponent } from '../../category-card/category-card.component';
import { DetailEventComponent } from '../../detail-event/detail-event.component';
import { ButtonComponent } from '../../utils/button/button.component';
import { CreateEventService } from '../../../../core/service/create-event.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-final-step',
  standalone: true,
  imports: [
    CategoryCardComponent,
    DetailEventComponent,
    ButtonComponent,
    CommonModule,
  ],
  templateUrl: './final-step.component.html',
  styleUrl: './final-step.component.scss',
})
export class FinalStepComponent {
  receivedData: any;
  blob: string = 'assets/blob/blob.svg';
  @Input() scale: number = 0;

  constructor(
    private formEvent: FormeventService,
    private createEventService: CreateEventService,
    private router: Router
  ) {}

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
        price:
          this.receivedData?.budget != null
            ? `${this.receivedData.budget} €`
            : 'Gratuit',
        description: this.receivedData.editorContent || '',
        imgUrl: this.receivedData.url
          ? Array.isArray(this.receivedData.url)
            ? this.receivedData.url
            : [this.receivedData.url]
          : [],
        categories:
          this.receivedData.selectedCategories?.map((cat: any) => ({
            id: cat.id,
          })) || [],
        gender: this.mapGender(this.receivedData.gender),
        owner: { id: 8 },
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
          console.error("Erreur lors de la création de l'événement :", error);
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
