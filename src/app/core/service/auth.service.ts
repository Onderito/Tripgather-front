import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Make sure this URL is correct

  constructor(
    private http: HttpClient,
    private jwtService: JwtService
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        if (response && response.token) {
          this.jwtService.storeToken(response.token);
        }
      }),
      catchError((error) => {
        console.error('Login error', error);
        return throwError(() => new Error('Login failed, please try again.'));
      })
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData).pipe(
      catchError((error) => {
        console.error('Registration error', error);
        return throwError(() => new Error('Registration failed, please try again.'));
      })
    );
  }

  isAuthenticated(): boolean {
    return this.jwtService.getToken() !== null && !this.jwtService.isTokenExpired();
  }

  logout(): void {
    this.jwtService.removeToken();
  }
}
