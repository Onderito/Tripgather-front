import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormeventService } from '../../../../core/service/formevent.service.js';
import { NavBarComponent } from "../../../../layout/nav-bar/nav-bar.component";
import { EditorComponent } from '@tinymce/tinymce-angular';


@Component({
  selector: 'app-steptwo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavBarComponent,EditorComponent],
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
      editorContent : ['']
    });
  }

  ngOnInit() {
    this.formEvent.data$.subscribe(data => {
      this.receivedData = data;
      console.log(this.receivedData);
    });
    
  }

  sendData() {
    console.log(this.form.value);
    // if (this.form.valid) {
    //   this.formEvent.setData(this.form.value);
    //   this.router.navigate(['/stepFinal']);
    // }
  }
  init = {
    selector: 'textarea',
    menubar: 'file edit view format tools table help',  // Supprimer 'insert' du menubar
    toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat', // Retirer les outils d'insertion
    plugins: 'lists link image table code',  // Ne pas inclure le plugin 'insert' ou 'media'
    height: 500,
    width : 700,
  };
}
