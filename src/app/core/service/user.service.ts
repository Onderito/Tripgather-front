import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private userSubject = new BehaviorSubject<any>({});
    public user$ = this.userSubject.asObservable();

  constructor(private http : HttpClient) { }

  public upadateValue(user : any ) {
    this.userSubject.next(user)
  }

  public getUser(): Observable<any> {
    return this.user$;
  }

    getOneUser(): Observable<any> {
      return this.http.get<any>('/users/1').pipe(
        catchError((error) => {
          console.error('Registration error', error);
          return throwError(() => new Error('Registration failed, please try again.'));
        })
      );
    }
  
}
