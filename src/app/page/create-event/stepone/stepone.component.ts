import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormeventService } from '../../../core/service/formevent.service.js';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepone',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.scss']
})
export class SteponeComponent {
  form: FormGroup;

  constructor(private formEvent: FormeventService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }

  sendData() {
    if (this.form.valid) {
      this.formEvent.setData(this.form.value);
      this.router.navigate(['/stepTwo']);
    }
  }
}
