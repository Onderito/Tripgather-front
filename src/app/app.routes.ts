import { Routes } from '@angular/router';
import { CreateeventPageComponent } from './page/createevent-page/createevent-page.component.js';
import { MainPageComponent } from './page/main-page/main-page.component.js';
import { FavoritePageComponent } from './page/favorite-page/favorite-page.component.js';
import { NotificationPageComponent } from './page/notification-page/notification-page.component.js';
import { RegisterPageComponent } from './page/register-page/register-page.component.js';

export const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'createevent', component: CreateeventPageComponent },
  { path: 'favorite', component: FavoritePageComponent },
  { path: 'notification', component: NotificationPageComponent },
  { path: 'profile', component: RegisterPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
