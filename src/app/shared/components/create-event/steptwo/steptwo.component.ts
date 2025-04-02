import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormeventService } from '../../../../core/service/utils/formevent.service';
import { CreateEventService } from '../../../../core/service/create-event.service';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { PRIMENG } from '../../../../../primeNgImport';
import { ButtonComponent } from '../../utils/button/button.component';
import { CreateCardEventComponent } from '../../create-card-event/create-card-event.component';

@Component({
  selector: 'app-steptwo',
  standalone: true,
  imports: [
    EditorComponent,
    PRIMENG,
    ButtonComponent,
    CreateCardEventComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './steptwo.component.html',
  styleUrls: ['./steptwo.component.scss'],
})
export class SteptwoComponent implements OnInit, OnDestroy {
  form: FormGroup;
  receivedData: any;
  selectedCategories: string[] = [];
  allDatta: any;
  categories: any[] = [
    {
      name: 'Music',
      color: 'rgba(255, 0, 0, 0.1)',
      img: 'assets/imgs/music-circle.svg',
    }, // red avec 50% d'opacité
    {
      name: 'Art & Culture',
      color: 'rgba(0, 0, 255, 0.1)',
      img: 'assets/imgs/art-culture.svg',
    }, // blue avec 50% d'opacité
    {
      name: 'Social Activities',
      color: 'rgba(0, 128, 0, 0.1)',
      img: 'assets/imgs/social-activity.svg',
    }, // green avec 50% d'opacité
    {
      name: 'Hobbies & Passion',
      color: 'rgba(255, 165, 0, 0.1)',
      img: 'assets/imgs/hobbies.svg',
    }, // orange avec 50% d'opacité
    {
      name: 'Sport',
      color: 'rgba(128, 0, 128, 0.1)',
      img: 'assets/imgs/ball.svg',
    }, // purple avec 50% d'opacité
    {
      name: 'Livre',
      color: 'rgba(255, 255, 0, 0.1)',
      img: 'assets/imgs/book.svg',
    }, // yellow avec 50% d'opacité
    {
      name: 'Religion',
      color: 'rgba(255, 192, 203, 0.1)',
      img: 'assets/imgs/spirituality.svg',
    }, // pink avec 50% d'opacité
  ];
  isLoading: boolean = true;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private formEvent: FormeventService,
    private createEventService: CreateEventService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      url: ['', Validators.required],
      editorContent: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Fetch categories from the API
    this.subscriptions.add(
      this.createEventService.getCategories().subscribe(
        (categories) => {
          this.categories = categories;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching categories:', error);
          this.isLoading = false;
        }
      )
    );

    // Subscribe to formEvent data stream and handle data
    this.subscriptions.add(
      this.formEvent.data$.subscribe((data) => {
        this.receivedData = data;
      })
    );
  }

  onCategorySelected(category: string) {
    if (!this.selectedCategories.includes(category)) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter(
        (c) => c !== category
      );
    }
  }

  groupData() {
    this.allDatta = {
      ...this.form.value,
      selectedCategories: this.selectedCategories,
    };
  }

  sendData() {
    if (this.form.valid) {
      this.groupData();
      this.formEvent.setData(this.allDatta);
      this.formEvent.nextStep();
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  // TinyMCE configuration
  init = {
    selector: 'textarea',
    skin: 'borderless',
    branding: false,
    statusbar: false,
    menubar: 'file edit view format tools table help',
    toolbar:
      'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
    plugins: 'lists link image table code',
    height: 440,
  };
}
