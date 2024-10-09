import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRIMENG } from '../primeNgImport';
import { FooterComponent } from './layout/footer/footer.component';
import { SecondaryCardComponent } from './shared/components/secondary-card/secondary-card.component';
import { TripDetailsComponent } from './shared/components/trip-details/trip-details.component';
import { HostProfileComponent } from './shared/components/host-profile/host-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PRIMENG,
    FooterComponent,
    SecondaryCardComponent,
    TripDetailsComponent,
    HostProfileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tripgather-front';
}
