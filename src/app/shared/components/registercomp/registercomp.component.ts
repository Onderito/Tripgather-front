import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { PRIMENG } from '../../../../primeNgImport';


@Component({
  selector: 'app-registercomp',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent,PRIMENG,FormsModule],
  templateUrl: './registercomp.component.html',
  styleUrl: './registercomp.component.scss'
})
export class RegistercompComponent {
  public registerForm! : FormGroup
  logoURL = '/assets/icons/trip.svg';
  country: any[] | undefined;
  selectedCountry: any | undefined;
  gender: any[] | undefined;
  selectedGender: any | undefined;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.init();
  }

  init() {
    this.registerForm = this.fb.group({
      gender: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      country: ['', [Validators.required]],
      birthdate: ['01/01/2000', [Validators.required]],
    });
    this.country = [
      { name: 'France'},
      { name: 'Espagne'},
      { name: 'Angleterre'},
      { name: 'Allemagne'},
      { name: 'Portugual'}
  ];
    this.gender = [
      { name: 'Homme'},
      { name: 'Femme'},
  ];
  }
  
  onSubmit() {
    console.log(this.registerForm.value);
  }
  }
  
