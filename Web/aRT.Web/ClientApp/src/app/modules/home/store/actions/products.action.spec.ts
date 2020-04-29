import * as fromProducts from './products.action';

describe('Products Actions', () => {
  describe('LoadProducts Actions', () => {
    describe('LoadProducts', () => {
      it('should create an action', () => {
        const action = new fromProducts.LoadProducts();

        expect({...action}).toEqual({
          type: fromProducts.LOAD_PRODUCTS,
        });
      });
    });

    describe('LoadProductsFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromProducts.LoadProductsFail(payload);

        expect({...action}).toEqual({
          type: fromProducts.LOAD_PRODUCTS_FAIL,
          payload,
        });
      });
    });

    describe('LoadProductsSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            id: '1',
            name: 'Productica',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
            description: 'Awesome description here!',
            price: 210,
            created_on: '2020-04-24T13:06:49.517Z',
          },
          {
            id: '2',
            name: 'Productica 2',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uoxteud0rv2d2wml9xkl/air-force-1-07-herrenschuh-3nGnlt.jpg',
            description: 'amazing description here!',
            price: 111,
            created_on: '2010-04-24T13:06:49.517Z',
          }
        ];
        const action = new fromProducts.LoadProductsSuccess(payload);

        expect({...action}).toEqual({
          type: fromProducts.LOAD_PRODUCTS_SUCCESS,
          payload,
        });
      });
    });
  });
});
