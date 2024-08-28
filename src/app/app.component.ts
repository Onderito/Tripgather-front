import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRIMENG } from '../primeNgImport';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { HomePageComponent } from './page/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PRIMENG, NavBarComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tripgather-front';
}
