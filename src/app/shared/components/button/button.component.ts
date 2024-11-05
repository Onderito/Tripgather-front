import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = 'Button'; // Texte du bouton
  @Input() type: string = 'button'; // Type du bouton
  @Input() disabled: boolean = false; // Désactiver le bouton
  @Input() variant: 'primary' | 'danger' | 'outline' = 'primary'; // Variante du bouton
  @Input() sizeClasses: string = ''; // Classes de taille personnalisées
}
