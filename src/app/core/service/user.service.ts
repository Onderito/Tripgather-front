import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

    getOneUser(): Observable<any> {
      return this.http.get<any>('/users/1').pipe(
        catchError((error) => {
          console.error('Registration error', error);
          return throwError(() => new Error('Registration failed, please try again.'));
        })
      );
    }
  
}
