import { Component } from '@angular/core';
import { PRIMENG } from '../../../primeNgImport';
import { DialogModule } from 'primeng/dialog';
import { ProfileSettingsComponent } from '../../shared/modal/profile-settings/profile-settings.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [PRIMENG, DialogModule, ProfileSettingsComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  imgOfhost: string = '/assets/imgs/Ulas.png';
  setting: string = '/assets/icons/settings.svg';
  edit: string = '/assets/icons/edit.svg';
  blob: string = '/assets/blob/profile-blob.svg';
  visible: boolean = false;

  // Fonction pour ouvrir le modal
  openModal() {
    this.visible = true;
  }

  // Fonction pour fermer le modal
  closeModal() {
    this.visible = false;
  }

  fakeData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'securePassword123',
    imageUrl: '/assets/imgs/Ulas.png',
    gender: false, // true pour homme, false pour femme
    bio: 'Développeur passionné par les nouvelles technologies et le design.Développeur passionné par les nouvelles technologies et le design.',
    country: 'France',
    birthDate: '23',
  };
}
