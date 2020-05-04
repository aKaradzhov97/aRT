// Decorators
import {Injectable} from '@angular/core';

// RXJS
import {Observable} from 'rxjs';

// HTTP
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

// Services
import {AuthService} from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.authService.getToken(),
        }
      });
    }

    return next.handle(request);
  }
}
