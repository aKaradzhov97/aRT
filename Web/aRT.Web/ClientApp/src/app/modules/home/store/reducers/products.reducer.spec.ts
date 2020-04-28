import * as fromProducts from './products.reducer';
import * as fromActions from '../actions/products.action';
import { Product } from '../../../../shared/models/product.model';

describe('ProductsReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromProducts;
      const action = {} as any;
      const state = fromProducts.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_PRODUCTS action', () => {
    it('should return the default state', () => {
      const { initialState } = fromProducts;
      const action = new fromActions.LoadProducts();
      const state = fromProducts.reducer(initialState, action);

      expect(state.entities).toEqual({});
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });

  describe('LOAD_PRODUCTS_SUCCESS action', () => {
    it('should populate the products array', () => {
      const products: Product[] = [
        {
          _id: '1',
          name: 'Productica',
          image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
          description: 'Awesome description here!',
          price: 210,
          created_on: '2020-04-24T13:06:49.517Z',
        },
        {
          _id: '2',
          name: 'Productica 2',
          image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
          description: 'amazing description here!',
          price: 111,
          created_on: '2010-04-24T13:06:49.517Z',
        }
      ];
      const entities = {
        1: products[0],
        2: products[1],
      };

      const { initialState } = fromProducts;
      const action = new fromActions.LoadProductsSuccess(products);
      const state = fromProducts.reducer(initialState, action);

      expect(state.entities).toEqual(entities);
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
    });
  });

  describe('LOAD_PRODUCTS_FAIL action', () => {
    it('should return the initial state', () => {
      const { initialState } = fromProducts;
      const action = new fromActions.LoadProductsFail({});
      const state = fromProducts.reducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should return the previous state', () => {
      const { initialState } = fromProducts;
      const previousState = { ...initialState, loading: true };
      const action = new fromActions.LoadProductsFail({});
      const state = fromProducts.reducer(previousState, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('CREATE_PRODUCT_SUCCESS action', () => {
    it('should add the new product to the products array', () => {
      const products: Product[] = [
        {
          _id: '1',
          name: 'Productica',
          image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
          description: 'Awesome description here!',
          price: 210,
          created_on: '2020-04-24T13:06:49.517Z',
        },
        {
          _id: '2',
          name: 'Productica 2',
          image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
          description: 'amazing description here!',
          price: 111,
          created_on: '2010-04-24T13:06:49.517Z',
        }
      ];
      const newProduct: Product = {
        _id: '3',
        name: 'Productica 3',
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
        description: 'NEW PRODUCT',
        price: 500,
        created_on: '2020-04-25T13:06:49.517Z',
      };
      const entities = {
        1: products[0],
        2: products[1],
      };
      const { initialState } = fromProducts;
      const previousState = { ...initialState, entities };
      const action = new fromActions.CreateProductSuccess(newProduct);
      const state = fromProducts.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(3);
      expect(state.entities).toEqual({ ...entities, 3: newProduct });
    });
  });

  describe('UPDATE_PRODUCT_SUCCESS action', () => {
    it('should update the product', () => {
      const products: Product[] = [
        {
          _id: '1',
          name: 'Productica',
          image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
          description: 'Awesome description here!',
          price: 210,
          created_on: '2020-04-24T13:06:49.517Z',
        },
        {
          _id: '2',
          name: 'Productica 2',
          image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
          description: 'amazing description here!',
          price: 111,
          created_on: '2010-04-24T13:06:49.517Z',
        }
      ];
      const updatedProduct: Product = {
        _id: '2',
        name: 'Productica 2',
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
        description: 'UPDATED PRODUCT',
        price: 500,
        created_on: '2020-04-25T13:06:49.517Z',
      };
      const entities = {
        1: products[0],
        2: products[1],
      };
      const { initialState } = fromProducts;
      const previousState = { ...initialState, entities };
      const action = new fromActions.UpdateProductSuccess(updatedProduct);
      const state = fromProducts.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(2);
      expect(state.entities).toEqual({ ...entities, 2: updatedProduct });
    });
  });

  describe('DELETE_PRODUCT_SUCCESS action', () => {
    it('should delete the product', () => {
      const products: Product[] = [
        {
          _id: '1',
          name: 'Productica',
          image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
          description: 'Awesome description here!',
          price: 210,
          created_on: '2020-04-24T13:06:49.517Z',
        },
        {
          _id: '2',
          name: 'Productica 2',
          image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
          description: 'amazing description here!',
          price: 111,
          created_on: '2010-04-24T13:06:49.517Z',
        }
      ];
      const entities = {
        1: products[0],
        2: products[1],
      };
      const { initialState } = fromProducts;
      const previousState = { ...initialState, entities };
      const action = new fromActions.DeleteProductSuccess(products[0]);
      const state = fromProducts.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(1);
      expect(state.entities).toEqual({ 2: products[1] });
    });
  });
});

fdescribe('ProductsReducer Selectors', () => {
  describe('getProductsEntities', () => {
    it('should return .entities', () => {
      const products: Product[] = [
        {
          _id: '1',
          name: 'Productica',
          image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
          description: 'Awesome description here!',
          price: 210,
          created_on: '2020-04-24T13:06:49.517Z',
        },
        {
          _id: '2',
          name: 'Productica 2',
          image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
          description: 'amazing description here!',
          price: 111,
          created_on: '2010-04-24T13:06:49.517Z',
        }
      ];
      const entities: { [key: string]: Product } = {
        1: products[0],
        2: products[1],
      };
      const { initialState } = fromProducts;
      const previousState = { ...initialState, entities };
      const slice = fromProducts.getProductsEntities(previousState);

      expect(slice).toEqual(entities);
    });
  });

  describe('getProductsLoading', () => {
    it('should return .loading', () => {
      const { initialState } = fromProducts;
      const previousState = { ...initialState, loading: true };
      const slice = fromProducts.getProductsLoading(previousState);

      expect(slice).toEqual(true);
    });
  });

  describe('getProductsLoaded', () => {
    it('should return .loaded', () => {
      const { initialState } = fromProducts;
      const previousState = { ...initialState, loaded: true };
      const slice = fromProducts.getProductsLoaded(previousState);

      expect(slice).toEqual(true);
    });
  });
});
