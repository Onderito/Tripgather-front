import { UserService } from './../../core/service/user.service';
import { Component } from '@angular/core';
import { PRIMENG } from '../../../primeNgImport';
import { ProfileSettingsComponent } from '../../shared/modal/profile-settings/profile-settings.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [PRIMENG, ProfileSettingsComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  userData: any;

  constructor(private userService: UserService) {}

  imgOfhost: string = '/assets/imgs/Ulas.png';
  setting: string = '/assets/icons/settings.svg';
  edit: string = '/assets/icons/edit.svg';
  blob: string = '/assets/blob/profile-blob.svg';

  visible: boolean = false;

  openModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.userData = user;
      console.log(this.userData, 'userDAta');
    });
  }
  fakeData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'securePassword123',
    imageUrl: '/assets/imgs/bg.svg',
    gender: false, // true pour homme, false pour femme
    bio: 'Développeur passionné par les nouvelles technologies et le design.Développeur passionné par les nouvelles technologies et le design.',
    country: 'France',
    birthDate: '23',
  };

  calculateAge(birthDate: string): number {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }
}
