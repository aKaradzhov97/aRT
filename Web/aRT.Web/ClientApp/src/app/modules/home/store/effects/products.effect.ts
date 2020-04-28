import {Injectable} from '@angular/core';
import {Product} from '../../../../shared/models/product.model';

import {Effect, Actions, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {map, switchMap, catchError} from 'rxjs/operators';

import * as fromRoot from '../../../../store';
import * as productActions from '../actions/products.action';
import * as fromServices from '../../../../core/services/product.service';


@Injectable()
export class ProductsEffect {
  constructor(private actions$: Actions,
              private productService: fromServices.ProductService) {
  }

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(productActions.LOAD_PRODUCTS),
    switchMap(() => {
      return this.productService
        .getProducts()
        .pipe(
          map(products => new productActions.LoadProductsSuccess(products)),
          catchError(error => of(new productActions.LoadProductsFail(error)))
        );
    })
  );

  @Effect()
  createProduct$ = this.actions$.pipe(
    ofType(productActions.CREATE_PRODUCT),
    map((action: productActions.CreateProduct) => action.payload),
    switchMap((product: Product) => {
      return this.productService
        .createProduct(product)
        .pipe(
          // Using the other line to avoid creating 2 entities (one of them broken) because of the
          // server response type!
          // map((product: Product) => new productActions.CreateProductSuccess(product)),
          map((response: any) => new productActions.CreateProductSuccess(response.data)),
          catchError((error: any) => of(new productActions.CreateProductFail(error)))
        );
    })
  );

  @Effect()
  createProductSuccess$ = this.actions$
    .pipe(
      ofType(productActions.CREATE_PRODUCT_SUCCESS),
      map((action: productActions.CreateProductSuccess) => action.payload),
      map((product: Product) => new fromRoot.Go({
        path: ['/products', product._id]
      }))
    );

  @Effect()
  updateProduct$ = this.actions$.pipe(
    ofType(productActions.UPDATE_PRODUCT),
    map((action: productActions.UpdateProduct) => action.payload),
    switchMap((product: Product) => {
      return this.productService
        .updateProduct(product)
        .pipe(
          map((response: any) => new productActions.UpdateProductSuccess(response.data)),
          catchError((error: any) => of(new productActions.UpdateProductFail(error)))
        );
    })
  );

  @Effect()
  deleteProduct$ = this.actions$.pipe(
    ofType(productActions.DELETE_PRODUCT),
    map((action: productActions.DeleteProduct) => action.payload),
    switchMap((product: Product) => {
      return this.productService
        .deleteProduct(product)
        .pipe(
          map(() => new productActions.DeleteProductSuccess(product)),
          catchError((error: any) => of(new productActions.DeleteProductFail(error)))
        );
    })
  );

  @Effect()
  handleProductSuccess$ = this.actions$
    .pipe(
      ofType(productActions.UPDATE_PRODUCT_SUCCESS, productActions.DELETE_PRODUCT_SUCCESS),
      map((product: Product) => {
        return new fromRoot.Go({
          path: ['/products'],
        });
      }),
    );
}
