// Decorators
import { Injectable } from '@angular/core';

// RXJS
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLogged = new Subject<boolean>();

  saveSession(): void {
    localStorage.setItem('isAuthenticated', 'true');
  }

  clearSession(): void {
    localStorage.removeItem('isAuthenticated');
  }

  isLoggedIn(): boolean {
      return !!localStorage.getItem('isAuthenticated');
  }

  isAdmin(): boolean {
    return false;
  }
}
