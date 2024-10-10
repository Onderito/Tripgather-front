import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = 'Button'; // Texte du bouton
  @Input() type: string = 'button'; // Type du bouton
  @Input() classes: string = ''; // Classes CSS supplémentaires
  @Input() variant: 'primary' | 'danger' | 'secondary' = 'primary'; // Choisir un variant de classe
  @Input() disabled: boolean = false; // Par défaut, le bouton n'est pas désactivé

}
