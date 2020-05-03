import * as fromCategories from './categories.reducer';
import * as fromCatActions from '../actions/categories.action';
import {Category} from '../../../../../../shared/models/category.model';

const categories: Category[] = [
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

describe('CategoriesReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const {initialState} = fromCategories;
      const action = {} as any;
      const state = fromCategories.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_CATEGORIES action', () => {
    it('should return the default state', () => {
      const {initialState} = fromCategories;
      const action = new fromCatActions.LoadCategories();
      const state = fromCategories.reducer(initialState, action);

      expect(state.entities).toEqual({});
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });

  describe('LOAD_CATEGORIES_SUCCESS action', () => {
    it('should populate the categories array', () => {
      const entities = {
        1: categories[0],
        2: categories[1],
      };

      const {initialState} = fromCategories;
      const action = new fromCatActions.LoadCategoriesSuccess(categories);
      const state = fromCategories.reducer(initialState, action);

      expect(state.entities).toEqual(entities);
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
    });
  });

  describe('LOAD_CATEGORIES_FAIL action', () => {
    it('should return the initial state', () => {
      const {initialState} = fromCategories;
      const action = new fromCatActions.LoadCategoriesFail({});
      const state = fromCategories.reducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should return the previous state', () => {
      const {initialState} = fromCategories;
      const previousState = {...initialState, loading: true};
      const action = new fromCatActions.LoadCategoriesFail({});
      const state = fromCategories.reducer(previousState, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('CREATE_CATEGORY_SUCCESS action', () => {
    it('should add the new category to the categories array', () => {
      const newCategory: Category = {
        id: '3',
        name: 'Kids',
        createdOn: '2020-04-25T13:06:49.517Z',
        subcategories: [],
      };
      const entities = {
        1: categories[0],
        2: categories[1],
      };
      const {initialState} = fromCategories;
      const previousState = {...initialState, entities};
      const action = new fromCatActions.CreateCategorySuccess(newCategory);
      const state = fromCategories.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(3);
      expect(state.entities).toEqual({...entities, 3: newCategory});
    });
  });

  describe('UPDATE_CATEGORY_SUCCESS action', () => {
    it('should update the category', () => {
      const updatedCategory: Category = {
        id: '2',
        name: 'NEW NAME',
        createdOn: '2020-04-25T13:06:49.517Z',
        subcategories: [],
      };
      const entities = {
        1: categories[0],
        2: categories[1],
        3: categories[2],
      };
      const {initialState} = fromCategories;
      const previousState = {...initialState, entities};
      const action = new fromCatActions.UpdateCategorySuccess(updatedCategory);
      const state = fromCategories.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(3);
      expect(state.entities).toEqual({...entities, 2: updatedCategory});
    });
  });

  describe('DELETE_CATEGORY_SUCCESS action', () => {
    it('should delete the category', () => {
      const entities = {
        1: categories[0],
        2: categories[1],
        3: categories[2],
      };
      const {initialState} = fromCategories;
      const previousState = {...initialState, entities};
      const action = new fromCatActions.DeleteCategorySuccess(categories[0]);
      const state = fromCategories.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(2);
      expect(state.entities).toEqual({2: categories[1], 3: categories[2]});
    });
  });
});

describe('CategoriesReducer Selectors', () => {
  describe('getCategoriesEntities', () => {
    it('should return .entities', () => {
      const testCategories: Category[] = [
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
      const entities: { [key: string]: Category } = {
        1: testCategories[0],
        2: testCategories[1],
      };
      const {initialState} = fromCategories;
      const previousState = {...initialState, entities};
      const slice = fromCategories.getCategoriesEntities(previousState);

      expect(slice).toEqual(entities);
    });
  });

  describe('getCategoriesLoading', () => {
    it('should return .loading', () => {
      const {initialState} = fromCategories;
      const previousState = {...initialState, loading: true};
      const slice = fromCategories.getCategoriesLoading(previousState);

      expect(slice).toEqual(true);
    });
  });

  describe('getCategoriesLoaded', () => {
    it('should return .loaded', () => {
      const {initialState} = fromCategories;
      const previousState = {...initialState, loaded: true};
      const slice = fromCategories.getCategoriesLoaded(previousState);

      expect(slice).toEqual(true);
    });
  });
});
