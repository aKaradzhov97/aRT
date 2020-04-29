// NGRX
import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../../store';
import * as fromFeature from '../reducers';
import * as fromProducts from '../reducers/products.reducer';

// Model
import {Product} from '../../../../shared/models/product.model';

// Selectors
export const getProductState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.products
);

export const getProductsEntities = createSelector(
  getProductState,
  fromProducts.getProductsEntities
);

export const getSelectedProduct = createSelector(
  getProductsEntities,
  fromRoot.getRouterState,
  (entities, router): Product => {
    return router.state && entities[router.state.params.productId];
  }
);

export const getAllProducts = createSelector(getProductsEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

export const getProductsLoaded = createSelector(
  getProductState,
  fromProducts.getProductsLoaded
);
export const getProductsLoading = createSelector(
  getProductState,
  fromProducts.getProductsLoading
);
