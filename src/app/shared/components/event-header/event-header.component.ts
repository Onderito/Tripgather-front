import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { PRIMENG } from '../../../../primeNgImport';
import { FormsModule } from '@angular/forms';
import { FormeventService } from '../../../core/service/formevent.service';

@Component({
  selector: 'app-event-header',
  standalone: true,
  imports: [PRIMENG,FormsModule],
  templateUrl: './event-header.component.html',
  styleUrl: './event-header.component.scss'
})
export class EventHeaderComponent implements AfterViewInit {
  val: number = 33; 
  scale: number = 1; 

  constructor(private formService: FormeventService,private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.formService.scale$.subscribe((value: number) => {
      this.scale = value;
      this.changeValue();
    });
  }

  changeValue(): void {
    if (this.scale === 1) {
      this.val = 33;
    } else if (this.scale === 2) {
      this.val = 66;
    } else if (this.scale === 3) {
      this.val = 100;
    }
  }
  ngAfterViewInit() {
    const sliderRange = this.el.nativeElement.querySelector('.p-slider-range');
    if (sliderRange) {
     this.renderer.setStyle(sliderRange, 'background-color', '#7cd466');
    }
  }
}