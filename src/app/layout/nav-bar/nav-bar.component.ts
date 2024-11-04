import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
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

  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('burgerMenu')?.addEventListener('click', () => {
        const menuDropdown = document.getElementById('menuDropdown');
        if (menuDropdown) {
          menuDropdown.classList.toggle('hidden');
        }
      });
    });
  }
}
