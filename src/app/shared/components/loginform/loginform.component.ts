import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../utils/button/button.component';

import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule,RouterModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss',
})
export class LoginformComponent {
  public loginForm!: FormGroup;
  logoURL = '/assets/icons/trip.svg';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router 
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err: any) => {
          console.error('Login failed', err);
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
