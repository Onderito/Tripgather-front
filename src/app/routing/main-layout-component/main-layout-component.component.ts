import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../../layout/nav-bar/nav-bar.component";

@Component({
  selector: 'app-main-layout-component',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout-component.component.scss'
})
export class MainLayoutComponent {

}
