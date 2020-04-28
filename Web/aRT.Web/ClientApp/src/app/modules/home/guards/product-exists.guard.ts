import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot} from '@angular/router';

import {Store} from '@ngrx/store';

import {Observable} from 'rxjs';
import {tap, map, filter, take, switchMap} from 'rxjs/internal/operators';
import * as fromStore from '../store';

import {Product} from '../../../shared/models/product.model';

@Injectable()
export class ProductExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.ProductsState>) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    return this.checkStore()
      .pipe(
        switchMap(() => {
          const id = route.params.productId;
          return this.hasProduct(id);
        })
      );
  }

  hasProduct(id: string): Observable<boolean> {
    return this.store
      .select(fromStore.getProductsEntities)
      .pipe(
        map((entities: { [key: string]: Product }) => !!entities[id]),
        take(1)
      );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getProductsLoaded)
      .pipe(
        tap((loaded: boolean) => {
          if (!loaded) {
            this.store.dispatch(new fromStore.LoadProducts());
          }
        }),
        filter((loaded: boolean) => loaded),
        take(1),
      );
  }
}
