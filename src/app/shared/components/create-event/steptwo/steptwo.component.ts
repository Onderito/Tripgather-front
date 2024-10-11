import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormeventService } from '../../../../core/service/formevent.service.js';
import { NavBarComponent } from "../../../../layout/nav-bar/nav-bar.component";
import { EditorComponent } from '@tinymce/tinymce-angular';
import { PRIMENG } from '../../../../../primeNgImport.js';
import { ButtonComponent } from '../../button/button.component.js';
import { CreateCardEventComponent } from "../../create-card-event/create-card-event.component";


@Component({
  selector: 'app-steptwo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavBarComponent, EditorComponent, PRIMENG, ButtonComponent, CreateCardEventComponent],
  templateUrl: './steptwo.component.html',
  styleUrls: ['./steptwo.component.scss']
})
export class SteptwoComponent implements OnInit {
  form: FormGroup;
  receivedData: any;
  selectedCategories: any[] = []; // Stocke les catégories sélectionnées
  allDatta : any;

  @Output() sendScale : EventEmitter<number> = new EventEmitter()
  data: any[] = [
    { catogory: 'music', color: 'rgba(255, 0, 0, 0.1)' }, // red avec 50% d'opacité
    { catogory: 'art & culture', color: 'rgba(0, 0, 255, 0.1)' }, // blue avec 50% d'opacité
    { catogory: 'social activities', color: 'rgba(0, 128, 0, 0.1)' }, // green avec 50% d'opacité
    { catogory: 'hobbies & passion', color: 'rgba(255, 165, 0, 0.1)' }, // orange avec 50% d'opacité
    { catogory: 'Sport', color: 'rgba(128, 0, 128, 0.1)' }, // purple avec 50% d'opacité
    { catogory: 'Livre', color: 'rgba(255, 255, 0, 0.1)' }, // yellow avec 50% d'opacité
    { catogory: 'Religion', color: 'rgba(255, 192, 203, 0.1)' } // pink avec 50% d'opacité
  ];
  

  constructor(private formEvent: FormeventService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      url : ['', Validators.required],
      editorContent : ['',Validators.required]
    });
  }

  ngOnInit() {
    this.formEvent.data$.subscribe(data => {
      this.receivedData = data;
      console.log(this.receivedData);
    });
    
  }

    // Méthode pour recevoir les catégories sélectionnées
    onCategorySelected(category: any) {
      // Ajouter ou retirer la catégorie sélectionnée
      if (!this.selectedCategories.includes(category)) {
        this.selectedCategories.push(category);
      } else {
        this.selectedCategories = this.selectedCategories.filter(c => c !== category);
      }
      console.log(this.selectedCategories);
    }

    groupData() {
      this.allDatta = {
        ...this.form.value,
        selectedCategories: this.selectedCategories  
      };
    }

  sendData() {
    if (this.form.valid) {
      this.groupData()
      console.log(this.allDatta, 'c moi');
       this.formEvent.setData(this.allDatta)
      this.sendScale.emit();
    }
  }
  init = {
    selector: 'textarea',
    skin: 'borderless',
    branding: false,
    statusbar: false,
    menubar: 'file edit view format tools table help',  // Supprimer 'insert' du menubar
    toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat', // Retirer les outils d'insertion
    plugins: 'lists link image table code',  // Ne pas inclure le plugin 'insert' ou 'media'
    height: 400,
  };
}
