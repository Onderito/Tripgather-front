import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { JwtService } from '../service/jwt.service';
import { environment } from '../../../environments/environment';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtService = inject(JwtService); // Injection manuelle en standalone
  const API_URL = `${environment.apiUrl}/api`;

  // Ajouter l'URL de base pour les requêtes non liées aux assets
  let apiReq = req.url.includes('assets')
    ? req
    : req.clone({ url: API_URL + req.url });

  // Ajouter le token si disponible
  const token = jwtService.getToken();
  if (token) {
    apiReq = apiReq.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(apiReq);
};
