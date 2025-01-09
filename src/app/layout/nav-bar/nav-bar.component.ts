import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  logoURL = '/assets/icons/trip.svg';
  heart = '/assets/icons/heart.svg';
  home = '/assets/icons/home.svg';
  notif = '/assets/icons/notif.svg';
  publish = '/assets/icons/publish.svg';
  publishNav = '/assets/icons/publishNav.svg';
  profile = '/assets/icons/profile.svg';
  isMenuOpen = false; // Suivi de l'état du menu
  userLogged: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe((isLogged) => {
      this.userLogged = isLogged;
      console.log(this.userLogged);
    });
    console.log(this.userLogged);
    const burgerMenu = document.getElementById('burgerMenu');
    const menuDropdown = document.getElementById('menuDropdown');

    burgerMenu?.addEventListener('click', () => {
      if (menuDropdown) {
        menuDropdown.classList.toggle('hidden');
      }
    });
  }

  redirection(route: string) {
    if (this.userLogged) {
      // Si l'utilisateur est authentifié, redirige vers la route spécifiée
      this.router.navigate([`/${route}`]);
    } else {
      // Si l'utilisateur n'est pas authentifié, redirige vers la page de login
      this.router.navigate(['/auth/login']);
    }
  }

  onChangeRoute(url: string) {
    this.router.navigate([url]);
    this.closeMenu(); // Ferme la navbar après la navigation
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
