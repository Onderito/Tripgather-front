import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/utils/button/button.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  homeImg = '/assets/imgs/homeImg.png';
  homeImgMobile = '/assets/imgs/homeImgMobile.png';
  desktopImg = '/assets/imgs/homeImgTablette.png';
  tripWhite = '/assets/icons/tripWhite.svg';
  background = '/assets/imgs/background.svg';
  whiteIcon = '/assets/icons/whiteIcon.svg';
}
