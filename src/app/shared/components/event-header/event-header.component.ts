import { Component } from '@angular/core';
import { PRIMENG } from '../../../../primeNgImport';
import { FormsModule } from '@angular/forms';
import { FormeventService } from '../../../core/service/formevent.service';

@Component({
  selector: 'app-event-header',
  standalone: true,
  imports: [PRIMENG,FormsModule],
  templateUrl: './event-header.component.html',
  styleUrl: './event-header.component.scss'
})
export class EventHeaderComponent {
  val: number = 33; // Initialise la progression
  scale: number = 3; // Initialise l'étape actuelle

  constructor(private formService: FormeventService) {}

  ngOnInit(): void {
    // Abonnement pour mettre à jour `scale` et `val` lorsque `scale$` change
    this.formService.scale$.subscribe((value: number) => {
      this.scale = value;
      this.changeValue();
    });
  }

  // Méthode pour mettre à jour `val` en fonction de `scale`
  changeValue(): void {
    if (this.scale === 3) {
      this.val = 33;
    } else if (this.scale === 2) {
      this.val = 66;
    } else if (this.scale === 1) {
      this.val = 100;
    }
  }
}