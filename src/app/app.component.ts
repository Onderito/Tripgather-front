import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRIMENG } from '../primeNgImport';
import { FooterComponent } from './layout/footer/footer.component';
import { SecondaryCardComponent } from './shared/components/secondary-card/secondary-card.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PRIMENG, LandingPageComponent, CommonModule, FooterComponent, SecondaryCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tripgather-front';
}
