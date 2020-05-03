// Decorators
import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// HTTP
import { HttpClient } from '@angular/common/http';

// Models
import { Category } from '../../shared/models/category.model';

// Constants
import { API_CONSTANTS } from '../../shared/constants';

const BASE_URL = API_CONSTANTS.BASE_URL + API_CONSTANTS.CATEGORY_ENDPOINT;
const GET_ALL_URL = `${BASE_URL}/all`;
// Just append ID after:
const CREATE_ONE_URL = `${BASE_URL}/create/`;
const UPDATE_ONE_URL = `${BASE_URL}/update/`;
const DELETE_ONE_URL = `${BASE_URL}/delete/`;


@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(GET_ALL_URL)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createCategory(payload: Category): Observable<Category> {
    return this.http
      .post<Category>(CREATE_ONE_URL, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateCategory(payload: Category): Observable<Category> {
    return this.http
      .put<Category>(`${UPDATE_ONE_URL}${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  deleteCategory(payload: Category): Observable<Category> {
    return this.http
      .delete<any>(`${DELETE_ONE_URL}${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
