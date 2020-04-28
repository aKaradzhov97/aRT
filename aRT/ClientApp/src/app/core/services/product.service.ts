// Decorators
import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// HTTP
import { HttpClient } from '@angular/common/http';

// Models
import { Product } from '../../shared/models/product.model';

// Constants
import { API_CONSTANTS } from '../../shared/constants';

const BASE_URL = API_CONSTANTS.BASE_URL + API_CONSTANTS.PRODUCT_ENDPOINT;
const GET_ALL_URL = `${BASE_URL}/all`;
// Just append ID after:
const GET_ONE_URL = `${BASE_URL}/`;
const CREATE_ONE_URL = `${BASE_URL}/create/`;
const UPDATE_ONE_URL = `${BASE_URL}/update/`;
const DELETE_ONE_URL = `${BASE_URL}/delete/`;


@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(GET_ALL_URL)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createProduct(payload: Product): Observable<Product> {
    return this.http
      .post<Product>(CREATE_ONE_URL, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateProduct(payload: Product): Observable<Product> {
    return this.http
      .put<Product>(`${UPDATE_ONE_URL}${payload._id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  deleteProduct(payload: Product): Observable<Product> {
    return this.http
      .delete<any>(`${DELETE_ONE_URL}${payload._id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
