import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete'; // Import de l'AutoCompleteCompleteEvent
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PRIMENG } from '../../../../../primeNgImport.js';
import { NavBarComponent } from '../../../../layout/nav-bar/nav-bar.component.js';
import { ButtonComponent } from '../../button/button.component.js';
import { FormeventService } from '../../../../core/service/formevent.service.js';
import { CountryService } from '../../../../core/service/country.service.js';
import {City} from '../../../../core/interface/city'

@Component({
  selector: 'app-stepone',
  standalone: true,
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.scss'],
  imports: [ReactiveFormsModule, CommonModule, PRIMENG, NavBarComponent, ButtonComponent],
})
export class SteponeComponent {
  form: FormGroup;
  minDate: Date = new Date();
  minDateBack: Date | null = null;
  gender: string[] = ['Femme', 'Homme'];
  filteredCities: any[] = []; // Liste filtrée des villes
  test: string = '';
  private searchSubject = new Subject<string>(); // Ajout du Subject pour gérer la recherche
  @Output() sendScale : EventEmitter<number> = new EventEmitter()

  constructor(
    private formEvent: FormeventService,
    private fb: FormBuilder,
    private countryService: CountryService
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      start: ['', Validators.required],
      back: ['', Validators.required],
      budget: ['', Validators.required],
      nbMenber: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
    }, {
      validators: this.dateValidator
    });
  }

  ngOnInit() {
    // Ajout de la logique debounce pour limiter les appels de recherche
    this.searchSubject.pipe(
      debounceTime(300), // Attendre 300ms après la dernière frappe
      distinctUntilChanged() // Ne pas déclencher si la même requête est saisie
    ).subscribe(query => {
      this.searchCities(query);
    });
  }

  // Méthode de recherche avec filtres qui accepte l'événement AutoCompleteCompleteEvent
  async searchCities(query: string): Promise<void> {
    if (query.length < 2) {
      this.filteredCities = []; // Pas de suggestions si moins de 2 caractères
      return;
    }
  
    try {
      const cities = await this.countryService.getCities();  // Type sécurisé en tant que City[]
      const filteredCities = cities.filter((city: City) =>
        city.name.toLowerCase().includes(query.toLowerCase())
      );
  
      // Ajoute une propriété displayName pour inclure la ville et le code pays
      this.filteredCities = filteredCities.map((city: City) => ({
        ...city,
        displayName: `${city.name} (${city.country})` // Formate pour afficher la ville + code pays
      }));
    } catch (error) {
      console.error("Erreur lors de la récupération des villes:", error);
    }
  }

  onCityComplete(event: AutoCompleteCompleteEvent): void {
    this.searchSubject.next(event.query); // Envoie la requête dans le Subject
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

    return null;
  }

  sendData() {
    if (this.form.valid) {
      this.formEvent.setData(this.form.value);
      this.formEvent.nextStep()
    }
  }
}