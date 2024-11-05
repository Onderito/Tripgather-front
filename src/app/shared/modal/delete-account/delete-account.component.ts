import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-delete-account',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './delete-account.component.html',
  styleUrl: './delete-account.component.scss',
})
export class DeleteAccountComponent {
  garbage: string = '/assets/icons/garbage.svg';
}
