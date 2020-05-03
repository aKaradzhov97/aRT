import * as fromCategories from './products.action';

describe('Categories Actions', () => {
  describe('LoadCategories Actions', () => {
    describe('LoadCategories', () => {
      it('should create an action', () => {
        const action = new fromCategories.LoadCategories();

        expect({...action}).toEqual({
          type: fromCategories.LOAD_CATEGORIES,
        });
      });
    });

    describe('LoadCategoriesFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromCategories.LoadCategoriesFail(payload);

        expect({...action}).toEqual({
          type: fromCategories.LOAD_CATEGORIES_FAIL,
          payload,
        });
      });
    });

    describe('LoadCategoriesSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            id: '1',
            name: 'Mens',
            createdOn: '2020-04-24T13:06:49.517Z',
            subcategories: []
          },
          {
            id: '2',
            name: 'Womens',
            createdOn: '2020-04-24T13:06:49.517Z',
            subcategories: []
          },
        ];
        const action = new fromCategories.LoadCategoriesSuccess(payload);

        expect({...action}).toEqual({
          type: fromCategories.LOAD_CATEGORIES_SUCCESS,
          payload,
        });
      });
    });
  });
});
