import { Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';
import { CreateeventPageComponent } from './page/createevent-page/createevent-page.component.js';
import { MainPageComponent } from './page/main-page/main-page.component.js';
import { FavoritePageComponent } from './page/favorite-page/favorite-page.component.js';
import { NotificationPageComponent } from './page/notification-page/notification-page.component.js';
import { MainLayoutComponent} from './routing/main-layout-component/main-layout-component.component';
import { AuthLayoutComponent} from './routing/auth-layout-component/auth-layout-component.component';
import { ProfilePageComponent } from './page/profile-page/profile-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, 
    children: [
      { path: 'home', component: MainPageComponent },
      { path: 'createevent', component: CreateeventPageComponent },
      { path: 'favorite', component: FavoritePageComponent },
      { path: 'notification', component: NotificationPageComponent },
      { path: 'profilepage', component: ProfilePageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'profile', component: RegisterPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
    ],
  },
];
