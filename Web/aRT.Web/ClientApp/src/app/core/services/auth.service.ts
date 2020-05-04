// Decorators
import {Injectable} from '@angular/core';

// RXJS
import {Subject} from 'rxjs';


// Decoder
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLogged = new Subject<boolean>();
  searchQuery = new Subject<string>();

  saveSession(token): void {
    localStorage.setItem('token', token);
  }

  clearSession(): void {
    localStorage.clear();
  }

  getProfile(): any {
    try {
      const decoded = decode(this.getToken());

      return decoded.sub;
    } catch (err) {
      return {};
    }
  }

  isLoggedIn(): boolean {
    try {
      const decoded = decode(this.getToken());

      return decoded.exp > Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }

  isAdmin(): boolean {
    try {
      const decoded = decode(this.getToken());

      return !(decoded.exp < Date.now() / 1000 || !decoded.sub.isAdmin);
    } catch (err) {
      return false;
    }
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
