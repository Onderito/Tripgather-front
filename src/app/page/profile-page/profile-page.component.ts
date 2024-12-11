import { Component } from '@angular/core';
import { PRIMENG } from '../../../primeNgImport';


@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [PRIMENG],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  imgOfhost: string = '/assets/imgs/Ulas.png';
  setting : string = '/assets/icons/settings.svg';
  edit: string = '/assets/icons/edit.svg';
  blob: string = '/assets/blob/profile-blob.svg';

  fakeData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "securePassword123",
      imageUrl: "/assets/imgs/Ulas.png",
      gender: true, // true pour homme, false pour femme
      bio: "Développeur passionné par les nouvelles technologies et le design.Développeur passionné par les nouvelles technologies et le design.",
      country: "France",
      birthDate: "23"
    };
    
  }

