import { PipeeventService } from './../../core/service/pipeevent.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MainCardComponent } from '../../shared/components/main-card/main-card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/utils/button/button.component';
import { EmptyTripComponent } from '../../shared/components/empty-data/empty-trip/empty-trip.component';
import { CreateEventService } from '../../core/service/create-event.service';
import { catchError, combineLatest, debounceTime, Observable, of, startWith, switchMap } from 'rxjs';
import { EventData } from '../../core/interface/formEvent';
import { EventDataForm } from '../../models/eventData';
import { PRIMENG } from '../../../primeNgImport';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MainCardComponent,
    CommonModule,
    ButtonComponent,
    EmptyTripComponent,
    ReactiveFormsModule,
    PRIMENG
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  search: FormGroup;
  isDropdownVisible: boolean = false; 
  event$: Observable<EventDataForm[]>; 
  errorMessage: string | null = null; 
  noData : boolean = true;
  gender : any[] = [{name : "MIXTE"},{name : "HOMME"},{name : "FEMME"}]

  constructor(private fb: FormBuilder, private pipeeventService: PipeeventService) {
    this.search = this.fb.group({
      localisation: [''],
      gender: [''],
      title : [''],
      toDate : [''],
      fromDate : [''],
    });

    this.event$ = this.search.valueChanges.pipe(
      debounceTime(300),
      startWith(this.search.value),
      switchMap((formValues) =>
        this.pipeeventService.getEventPipe({
          localisation: formValues.localisation || undefined,
          gender: formValues.gender && typeof formValues.gender === 'object' ? formValues.gender.name : formValues.gender || undefined,
          title: formValues.title || undefined,
          // toDate: formValues.toDate || undefined,
          // fromDate: formValues.fromDate || undefined,
        }).pipe(
          catchError((error) => {
            console.error('Erreur lors de la récupération des événements :', error);
            this.errorMessage = 'Une erreur s\'est produite lors de la récupération des événements.';
            return of([]);
          })
        )
      )
    );
  }

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
