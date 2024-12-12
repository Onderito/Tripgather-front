import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { ButtonComponent } from '../utils/button/button.component';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-registercomp',
  standalone: true,
  imports: [ButtonComponent, CommonModule, ReactiveFormsModule, DropdownModule, ButtonModule, CalendarModule, RouterModule],
  templateUrl: './registercomp.component.html',
  styleUrls: ['./registercomp.component.scss'],
})
export class RegistercompComponent {
  public registerForm!: FormGroup;
  public isSubmitted = false; // Propriété pour suivre si le formulaire a été soumis
  logoURL = '/assets/icons/trip.svg';
  country: any[] = [];
  selectedCountry: any;
  gender: any[] = [];
  selectedGender: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
          Validators.minLength(8),
        ],
      ],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      country: ['', [Validators.required]],
      birthdate: [null, [Validators.required]],
      bio: ['', []],
      imageUrl: ['', []],
    });

    this.country = [
      { name: 'France' },
      { name: 'Espagne' },
      { name: 'Angleterre' },
      { name: 'Allemagne' },
      { name: 'Portugal' },
    ];

    this.gender = [
      { name: 'Homme' },
      { name: 'Femme' },
    ];
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.registerForm.valid) {
      const userData = { ...this.registerForm.value };

      if (!userData.bio) {
        userData.bio = null;
      }
      if (!userData.imageUrl) {
        userData.imageUrl = null;
      }

      this.authService.register(userData).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Registration failed', err);
          alert('Registration failed, please try again.');
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
