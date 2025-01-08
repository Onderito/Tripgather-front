import { Component } from '@angular/core';
import { TripDetailsComponent } from '../../shared/components/trip-details/trip-details.component';
import { HostProfileComponent } from '../../shared/components/host-profile/host-profile.component';
import { SecondaryCardComponent } from '../../shared/components/secondary-card/secondary-card.component';
import { ParticipantsListViewComponent } from '../../shared/components/participants-list-view/participants-list-view.component';
import { SelectedService } from '../../core/service/utils/selected.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selected-page',
  standalone: true,
  imports: [
    TripDetailsComponent,
    HostProfileComponent,
    SecondaryCardComponent,
    ParticipantsListViewComponent,
    CommonModule
  ],
  templateUrl: './selected-page.component.html',
  styleUrl: './selected-page.component.scss',
})
export class SelectedPageComponent {

  tripDetail : any;

  constructor(private selctedService : SelectedService) {}

  ngOnInit() {
    this.selctedService.currentEventData.subscribe((res) => {
      this.tripDetail = res
      console.log(res, 'selected service data');
    })
  }
}
