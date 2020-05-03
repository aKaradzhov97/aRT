// NGRX
import {createSelector} from '@ngrx/store';

import * as fromRoot from '../../../../../../store';
import * as fromFeature from '../reducers';
import * as fromCategories from '../reducers/categories.reducer';

// Model
import {Category} from '../../../../../../shared/models/category.model';

// Selectors
export const getCategoryState = createSelector(
  fromFeature.getCategoriesState,
  (state: fromFeature.CategoriesState) => state.categories
);

export const getCategoriesEntities = createSelector(
  getCategoryState,
  fromCategories.getCategoriesEntities
);

export const getSelectedCategory = createSelector(
  getCategoriesEntities,
  fromRoot.getRouterState,
  (entities, router): Category => {
    return router.state && entities[router.state.params.categoryId];
  }
);

export const getAllCategories = createSelector(getCategoriesEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

export const getCategoriesLoaded = createSelector(
  getCategoryState,
  fromCategories.getCategoriesLoaded
);
export const getCategoriesLoading = createSelector(
  getCategoryState,
  fromCategories.getCategoriesLoading
);
