import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  homeImg = '/assets/imgs/homeImg.png';
  homeImgBlur = '/assets/imgs/homeImgBlur.png';
  homeImgMobile = '/assets/imgs/homeImgMobile.png';
  tripWhite = '/assets/icons/tripWhite.svg';
}
