import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  getDecodedToken(): any {
    const token = this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isTokenExpired(): boolean {
    const decoded = this.getDecodedToken();
    if (!decoded) return true;
    const currentTime = Math.floor(new Date().getTime() / 1000); // Current time in seconds
    return decoded.exp < currentTime;
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }
}
