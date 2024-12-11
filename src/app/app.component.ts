import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';
import { PRIMENG } from '../primeNgImport';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,PRIMENG],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showNavBar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.showNavBar = !(currentRoute === '/login' || currentRoute === '/register');
    });
  }

}
