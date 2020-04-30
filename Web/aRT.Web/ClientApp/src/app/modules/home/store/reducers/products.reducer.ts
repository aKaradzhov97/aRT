import * as fromProducts from '../actions/products.action';
import {Product} from '../../../../shared/models/product.model';

export interface ProductState {
  entities: { [id: number]: Product };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(state = initialState,
                        action: fromProducts.ProductsAction): ProductState {
  switch (action.type) {
    case fromProducts.LOAD_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromProducts.LOAD_PRODUCTS_SUCCESS: {
      const products: Product[] = action.payload.data;
      const entities = products.reduce(
        (entities: { [id: number]: Product }, product: Product) => {
          return {
            ...entities,
            [product.id]: product,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromProducts.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromProducts.UPDATE_PRODUCT:
    case fromProducts.CREATE_PRODUCT: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromProducts.UPDATE_PRODUCT_SUCCESS:
    case fromProducts.CREATE_PRODUCT_SUCCESS: {
      const product: Product = action.payload;
      const entities = {
        ...state.entities,
        [product.id]: product
      };

      return {
        ...state,
        entities
      }
    }

    case fromProducts.UPDATE_PRODUCT_FAIL:
    case fromProducts.CREATE_PRODUCT_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromProducts.DELETE_PRODUCT_SUCCESS: {
      const product = action.payload;

      // What?
      // Yes! The following line is using destructuring to obtain and name
      // the deleted product as 'REMOVED' and the second argument
      // contains the remaining properties of that destructuring.
      // In other words: immutable way to remove a property from an object.
      // const {[product.id]: removed, ...entities } = state.entities;

      const entities = state.entities;
      delete entities[product.id];

      return {
        ...state,
        entities,
      };
    }
  }

  return state;
}

export const getProductsEntities = (state: ProductState) => state.entities;
export const getProductsLoading = (state: ProductState) => state.loading;
export const getProductsLoaded = (state: ProductState) => state.loaded;
