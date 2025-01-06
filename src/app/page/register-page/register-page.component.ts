import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from '../../shared/components/register-form/register-form.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RegisterFormComponent, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  imgMobile = '/assets/imgs/homeImgMobile.png';
  tripLogoWhite = 'assets/icons/tripWhite.svg';
  imgTablette = '/assets/imgs/homeImgTablette.png';
}
