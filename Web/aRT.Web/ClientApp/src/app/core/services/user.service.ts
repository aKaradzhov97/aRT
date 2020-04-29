// Decorators
import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// HTTP
import { HttpClient } from '@angular/common/http';

// Models
import {User} from '../../shared/models/user.model';

// Constants
import { API_CONSTANTS } from '../../shared/constants';


const BASE_URL = API_CONSTANTS.BASE_URL + API_CONSTANTS.AUTH_ENDPOINT;

const LOGIN_URL = `${BASE_URL}/login`;
const REGISTER_URL = `${BASE_URL}/register`;

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  login(payload: User): Observable<User> {
    return this.http
      .post<User>(LOGIN_URL, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  register(payload: User): Observable<User> {
    return this.http
      .post<User>(REGISTER_URL, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
