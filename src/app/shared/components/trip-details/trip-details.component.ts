import { Component } from '@angular/core';
import { ButtonComponent } from '../utils/button/button.component';
import { HostProfileComponent } from '../host-profile/host-profile.component';
import { ParticipantsListViewComponent } from '../participants-list-view/participants-list-view.component';
import { SecondaryCardComponent } from '../secondary-card/secondary-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [
    ButtonComponent,
    HostProfileComponent,
    ParticipantsListViewComponent,
    SecondaryCardComponent,
    CommonModule,
  ],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.scss',
})
export class TripDetailsComponent {
  imgOfTrip: string = '/assets/imgs/homeImg.png';
  imgOfhost: string = '/assets/imgs/Ulas.png';
  heart: string = '/assets/imgs/white-heart.svg';

  liked: boolean = false;

  toggleLike() {
    this.liked = !this.liked;
    console.log('Liked:', this.liked); // Ajoutez ce log pour déboguer
  }
}
