import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import * as fromCategories from './categories.reducer';

export interface CategoriesState {
  categories: fromCategories.CategoryState;
}

export const reducers: ActionReducerMap<CategoriesState> = {
  categories: fromCategories.reducer,
};

export const getCategoriesState = createFeatureSelector<CategoriesState>(
  'categories'
);
