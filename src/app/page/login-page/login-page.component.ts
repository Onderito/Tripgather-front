import { Component } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { LoginformComponent } from '../../shared/components/loginform/loginform.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [HomePageComponent, LoginformComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  imgMobile = '/assets/imgs/homeImgMobile.png';
  tripLogoWhite = 'assets/icons/tripWhite.svg';
  imgTablette = '/assets/imgs/homeImgTablette.png';
}
