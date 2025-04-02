import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtService } from './jwt.service';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.authSubject.asObservable();

  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  // Méthode pour vérifier l'authentification
  checkAuthentication(): boolean {
    // Logique de vérification
    return this.authSubject.value;
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<{ token: string }>('/auth/login', { email, password })
      .pipe(
        tap((response: any) => {
          if (response && response.token) {
            this.jwtService.storeToken(response.token);
            this.authSubject.next(true);
            this.userService.upadateValue(response.user);
          }
        }),
        catchError((error) => {
          console.error('Login error', error);
          return throwError(() => new Error('Login failed, please try again.'));
        })
      );
  }

  register(userData: any): Observable<any> {
    console.log(userData, 'donées envoyés');
    return this.http.post<any>('/auth/register', userData).pipe(
      tap((response) => console.log('Réponse du register:', response)), // Et celui-ci
      catchError((error) => {
        console.error('Registration error', error);
        return throwError(
          () => new Error('Registration failed, please try again.')
        );
      })
    );
  }

  logout(): void {
    this.jwtService.removeToken();
    // this.authSubject.next(false);
    // this.router.navigate(['/']);
  }
}
