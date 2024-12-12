import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { JwtService } from '../service/jwt.service';  // Correct import for JwtService

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private token: string = '';
  private API_URL = 'http://localhost:8080/api';

  constructor(private jwtService: JwtService) {
    this.token = this.getToken(); 
  }

  getToken(): string {
    return this.jwtService.getToken() || '';
  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.headers.has('skip-interceptor')) {
      return next.handle(req);
    }
    let apiReq = req.clone({ url: req.url });
    if (!req.url.includes('assets')) {
      apiReq = req.clone({ url: this.API_URL + `${req.url}` });
    }
    if (this.token !== undefined) {
      const newRequest = apiReq.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + this.token),
      });
      return next.handle(newRequest);
    } else {
      return next.handle(apiReq);
    }
  }
}
