import { Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LoginformComponent } from './shared/components/loginform/loginform.component';
import { SelectedPageComponent } from './page/selected-page/selected-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';
import { AuthGuard } from './core/guard/auth.guards';
import { CreateeventPageComponent } from './page/createevent-page/createevent-page.component.js';
import { MainPageComponent } from './page/main-page/main-page.component.js';
import { FavoritePageComponent } from './page/favorite-page/favorite-page.component.js';
import { NotificationPageComponent } from './page/notification-page/notification-page.component.js';


export const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'createevent', component: CreateeventPageComponent },
  { path: 'favorite', component: FavoritePageComponent },
  { path: 'notification', component: NotificationPageComponent },
  { path: 'profile', component: RegisterPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login', 
    component: LoginPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register', 
    component: RegisterPageComponent,
    canActivate: [AuthGuard]
  },
];
