import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../utils/button/button.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [
    ButtonComponent,
    CommonModule
  ],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.scss',
})
export class TripDetailsComponent {
  imgOfTrip: string = '/assets/imgs/homeImg.png';
  imgOfhost: string = '/assets/imgs/Ulas.png';
  @Input() userDetail : any;

  isLogged: boolean = false;
  participe: string = 'Participer';
  
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe((isLog) => {
      this.isLogged = isLog
    })
  }
  
  redirection() {
    if (!this.isLogged) {
      this.router.navigate(['/auth/login']);
    } else {
      this.participe = "Vous participez";
    }
  }
  
}
