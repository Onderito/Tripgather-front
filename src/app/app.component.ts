import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRIMENG } from '../primeNgImport';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PRIMENG, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tripgather-front';
}
