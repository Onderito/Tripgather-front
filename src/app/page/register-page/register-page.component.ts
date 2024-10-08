import { Component } from '@angular/core';
import { RegistercompComponent } from '../../shared/components/registercomp/registercomp.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RegistercompComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  imgMobile = '/assets/imgs/homeImgMobile.png';
  tripLogoWhite = 'assets/icons/tripWhite.svg';
  imgTablette = '/assets/imgs/homeImgTablette.png';
}
