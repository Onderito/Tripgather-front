import { Component } from '@angular/core';
import { ButtonComponent } from '../utils/button/button.component';
import { HostProfileComponent } from '../host-profile/host-profile.component';
import { ParticipantsListViewComponent } from '../participants-list-view/participants-list-view.component';
import { SecondaryCardComponent } from '../secondary-card/secondary-card.component';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [
    ButtonComponent,
    HostProfileComponent,
    ParticipantsListViewComponent,
    SecondaryCardComponent,
  ],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.scss',
})
export class TripDetailsComponent {
  imgOfTrip: string = '/assets/imgs/homeImg.png';
  imgOfhost: string = '/assets/imgs/Ulas.png';
}
