import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormeventService } from '../../../../core/service/formevent.service.js';
import { NavBarComponent } from "../../../../layout/nav-bar/nav-bar.component";

@Component({
  selector: 'app-steptwo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavBarComponent],
  templateUrl: './steptwo.component.html',
  styleUrls: ['./steptwo.component.scss']
})
export class SteptwoComponent implements OnInit {
  form: FormGroup;
  receivedData: any;

  constructor(private formEvent: FormeventService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      email : ['', [Validators.required]],
      mdp : ['', Validators.required],
    });
  }

  ngOnInit() {
    this.formEvent.data$.subscribe(data => {
      this.receivedData = data;
      console.log(this.receivedData);
    });
    
  }

  sendData() {
    if (this.form.valid) {
      this.formEvent.setData(this.form.value);
      this.router.navigate(['/stepFinal']);
    }
  }

  selectedFont: string = 'Arial';
selectedFontSize: string = '16px';

changeFont(event: Event) {
  const target = event.target as HTMLSelectElement;
  this.selectedFont = target.value;
}

changeFontSize(event: Event) {
  const target = event.target as HTMLSelectElement;
  this.selectedFontSize = target.value;
}
}
