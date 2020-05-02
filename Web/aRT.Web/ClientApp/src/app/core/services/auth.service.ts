// Decorators
import { Injectable } from '@angular/core';

// RXJS
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLogged = new Subject<boolean>();

  saveSession(token): void {
    console.log(`SAVE SESSION FUNCTION: ${token}`);
  }

  clearSession(): void {
  }

  getProfile(): void {
  }

  isLoggedIn(): boolean {
      return false;
  }

  isAdmin(): boolean {
    return false;
  }

  getToken(): string {
    return 'TOKEN';
  }
}
