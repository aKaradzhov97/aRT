// Decorators
import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// HTTP
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

// Services
// TODO ADD NOTIFICATION SERVICE
import { AuthService } from '../services/auth.service';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {

  constructor(
    // TODO ADD THE NOTIF SERVICE AS DEP INJECTION
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap(
          (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              if (event.body.message || event.body.message !== '') {
                // this.toastr.success(event.body.message);
                console.log('Success! ' + event.body.message);
              }
            }

            if (event instanceof HttpResponse && request.url.endsWith('login')) {
              this.authService.saveSession();
              // this.authService.isUserLogged.next(true);

              console.log('Success! ' + event.body.message);
            }
          }
        )
      );
  }
}
