import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRIMENG } from '../primeNgImport';
import { FooterComponent } from './layout/footer/footer.component';
import { SelectedPageComponent } from './page/selected-page/selected-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PRIMENG, FooterComponent, SelectedPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tripgather-front';
}
