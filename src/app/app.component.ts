import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRIMENG } from '../primeNgImport';
import { HomePageComponent } from './page/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PRIMENG, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tripgather-front';
}
