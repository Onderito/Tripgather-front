import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../utils/button/button.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { CreateEventService } from '../../../core/service/create-event.service';
import { UserService } from '../../../core/service/user.service';

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
  @Input() EventId : any;

  isLogged: boolean = false;
  participe: string = 'Participer';

  user : any;
  events : any;
  eventsIds : any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private eventSercice : CreateEventService,
    private userService : UserService
  ) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe((isLog) => {
      this.isLogged = isLog
    })
    this.userService.getUser().subscribe((user) => {
      this.user = user
    })
    this.eventSercice.getEventById(this.user.id).subscribe((event) => {
      this.events = event
      this.eventsIds = this.reformatedArray(this.events);
      console.log("-------compare is called-----------------")
      this.compareEventIdwithArray()
    })
  }

  reformatedArray(array: any): number[] {
  return array.map((el: any) => el.id);
}

compareEventIdwithArray() {
  for (let i = 0; i < this.eventsIds.length; i++) {
    if(this.eventsIds[i] === this.EventId) {
     this.participe = 'Vous participer dèjà'
    } 
  }
}
  
  redirection() {
    if (!this.isLogged) {
      this.router.navigate(['/auth/login']);
    } else {
      console.log("-----------------------event et user----------------------");
      console.log(this.EventId, 'id de levent');
      this.eventSercice.postUserInEvent(this.user.id,this.EventId).subscribe()
      this.participe = "Vous participez";
    }
  }
  
}
