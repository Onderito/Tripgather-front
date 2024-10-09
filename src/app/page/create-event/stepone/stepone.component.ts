import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { FormeventService } from '../../../core/service/formevent.service.js';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PRIMENG } from '../../../../primeNgImport.js';
import { NavBarComponent } from "../../../layout/nav-bar/nav-bar.component";

@Component({
  selector: 'app-stepone',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PRIMENG, NavBarComponent],
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.scss'],
})
export class SteponeComponent {
  form: FormGroup;
  minDateBack: Date | null = null;
  gender : string[] = ['woman','man']

  constructor(private formEvent: FormeventService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      start: ['', Validators.required],
      back: ['', Validators.required],
      budget: ['', Validators.required],
      nbMenber: ['', Validators.required],
      gender: ['', Validators.required],
    }, {
      validators: this.dateValidator // Ajout de la validation croisée
    });

    // Écoutez les changements sur le champ 'start' pour mettre à jour minDate de 'back'
    this.form.get('start')?.valueChanges.subscribe((startValue: Date) => {
      if (startValue) {
        this.minDateBack = startValue;
      }
    });
  }

  dateValidator(group: FormGroup): ValidationErrors | null {
    const start = group.get('start')?.value;
    const back = group.get('back')?.value;
  
    if (start && back && back < start) {
      return { backBeforeStart: true };
    }
  
    if (!start && back) {
      group.get('back')?.reset();
      return { backBeforeStart: true }; 
    }
  
    return null; // Si tout est correct, retourne null
  }

  sendData() {
    if (this.form.valid) {
      this.formEvent.setData(this.form.value);
      this.router.navigate(['/stepTwo']);
    }
  }
}
