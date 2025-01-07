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

  constructor(private Route: Router, private authService: AuthService) {}

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

  onChangeRoute(url: string) {
    this.Route.navigate([url]);
    this.closeMenu(); // Ferme la navbar après la navigation
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
