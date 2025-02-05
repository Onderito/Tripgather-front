import { Component } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [],
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.scss',
})
export class ProfileSettingsComponent {

  constructor(private authService : AuthService) {}

  changePassword: string = '/assets/icons/password.svg';
  changeEmail: string = '/assets/icons/mail.svg';
  deleteAccount: string = '/assets/icons/trash.svg';
  disconnect: string = '/assets/icons/disconnect.svg';

  onClickLogout() {
    this.authService.logout();
  }
}
