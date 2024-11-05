import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [],
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.scss',
})
export class ProfileSettingsComponent {
  changePassword: string = '/assets/icons/password.svg';
  changeEmail: string = '/assets/icons/mail.svg';
  deleteAccount: string = '/assets/icons/trash.svg';
  disconnect: string = '/assets/icons/disconnect.svg';
}
