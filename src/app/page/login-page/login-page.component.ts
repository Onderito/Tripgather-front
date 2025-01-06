import { Component } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { LoginFormComponent } from '../../shared/components/login-form/login-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(private router: Router) {}
  imgMobile = '/assets/imgs/homeImgMobile.png';
  tripLogoWhite = 'assets/icons/tripWhite.svg';
  imgTablette = '/assets/imgs/homeImgTablette.png';
  home = '/assets/icons/white-home.svg';

  onChangeRoute(url: string) {
    this.router.navigate([url]);
  }
}
