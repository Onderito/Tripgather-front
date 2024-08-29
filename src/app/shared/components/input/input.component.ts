import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() placeholder: string = 'input';
  @Input() classes: string = '';
  @Input() labelid: string = ''; // ID pour le label
  @Input() id: string = ''; // ID pour l'input
  @Input() type: string = 'text'; // Type par défaut 'text'
  @Input() textInput: string = ''; 
  @Input() variant: string = ''; // Changez le style
}
