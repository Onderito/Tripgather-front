// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authService.checkAuthentication()) {
      // Si l'utilisateur n'est pas authentifié, on le redirige vers la page de connexion
      this.router.navigate(['/login']); // ou autre route selon votre besoin
      return false;
    }
    return true; // Si l'utilisateur est authentifié, on permet l'accès à la route
  }
}
