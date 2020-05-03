import * as fromCategories from '../actions/categories.action';
import {Category} from '../../../../../../shared/models/category.model';

export interface CategoryState {
  entities: { [id: string]: Category };
  loaded: boolean;
  loading: boolean;
}

export const initialState: CategoryState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(state = initialState,
                        action: fromCategories.CategoriesAction): CategoryState {
  switch (action.type) {
    case fromCategories.LOAD_CATEGORIES: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromCategories.LOAD_CATEGORIES_SUCCESS: {
      const categories: Category[] = action.payload.data;
      const entities = categories.reduce(
        (entities: { [id: string]: Category }, category: Category) => {
          return {
            ...entities,
            [category.id]: category,
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

    case fromCategories.LOAD_CATEGORIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromCategories.UPDATE_CATEGORY:
    case fromCategories.CREATE_CATEGORY: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromCategories.UPDATE_CATEGORY_SUCCESS:
    case fromCategories.CREATE_CATEGORY_SUCCESS: {
      const category: Category = action.payload;
      const entities = {
        ...state.entities,
        [category.id]: category
      };

      return {
        ...state,
        entities
      };
    }

    case fromCategories.UPDATE_CATEGORY_FAIL:
    case fromCategories.CREATE_CATEGORY_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromCategories.DELETE_CATEGORY_SUCCESS: {
      const category: Category = action.payload;
      const {[category.id]: removed, ...entities} = state.entities;

      return {
        ...state,
        entities,
      };
    }
  }

  return state;
}

export const getCategoriesEntities = (state: CategoryState) => state.entities;
export const getCategoriesLoading = (state: CategoryState) => state.loading;
export const getCategoriesLoaded = (state: CategoryState) => state.loaded;
