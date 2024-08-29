import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss',
})
export class LoginformComponent {
  public loginForm!: FormGroup;
  logoURL = '/assets/imgs/trip.svg';
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required], Validators.email],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
