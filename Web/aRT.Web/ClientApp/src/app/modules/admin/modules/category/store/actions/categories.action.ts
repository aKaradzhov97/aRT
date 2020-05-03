import {Action} from '@ngrx/store';

import {Category} from '../../../../../../shared/models/category.model';

// Load products
export const LOAD_CATEGORIES = '[Categories] Load Categories';
export const LOAD_CATEGORIES_FAIL = '[Categories] Load Categories Fail';
export const LOAD_CATEGORIES_SUCCESS = '[Categories] Load Categories Success';

export class LoadCategories implements Action {
  readonly type = LOAD_CATEGORIES;
}

export class LoadCategoriesFail implements Action {
  readonly type = LOAD_CATEGORIES_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadCategoriesSuccess implements Action {
  readonly type = LOAD_CATEGORIES_SUCCESS;

  constructor(public payload: any) {
  }
}


// CREATE

export const CREATE_CATEGORY = '[Categories] Create Category';
export const CREATE_CATEGORY_FAIL = '[Categories] Create Category Fail';
export const CREATE_CATEGORY_SUCCESS = '[Categories] Create Category Success';

export class CreateCategory implements Action {
  readonly type = CREATE_CATEGORY;

  constructor(public payload: Category) {
  }
}

export class CreateCategoryFail implements Action {
  readonly type = CREATE_CATEGORY_FAIL;

  constructor(public payload: any) {
  }
}

export class CreateCategorySuccess implements Action {
  readonly type = CREATE_CATEGORY_SUCCESS;

  constructor(public payload: Category) {
  }
}

// UPDATE

export const UPDATE_CATEGORY = '[Categories] Update Category';
export const UPDATE_CATEGORY_FAIL = '[Categories] Update Category Fail';
export const UPDATE_CATEGORY_SUCCESS = '[Categories] Update Category Success';

export class UpdateCategory implements Action {
  readonly type = UPDATE_CATEGORY;

  constructor(public payload: Category) {
  }
}

export class UpdateCategoryFail implements Action {
  readonly type = UPDATE_CATEGORY_FAIL;

  constructor(public payload: any) {
  }
}

export class UpdateCategorySuccess implements Action {
  readonly type = UPDATE_CATEGORY_SUCCESS;

  constructor(public payload: Category) {
  }
}

// DELETE

export const DELETE_CATEGORY = '[Categories] Delete Category';
export const DELETE_CATEGORY_FAIL = '[Categories] Delete Category Fail';
export const DELETE_CATEGORY_SUCCESS = '[Categories] Delete Category Success';

export class DeleteCategory implements Action {
  readonly type = DELETE_CATEGORY;

  constructor(public payload: Category) {
  }
}

export class DeleteCategoryFail implements Action {
  readonly type = DELETE_CATEGORY_FAIL;

  constructor(public payload: any) {
  }
}

export class DeleteCategorySuccess implements Action {
  readonly type = DELETE_CATEGORY_SUCCESS;

  constructor(public payload: Category) {
  }
}

// Action types
export type ProductsAction =
  | LoadCategories
  | LoadCategoriesFail
  | LoadCategoriesSuccess
  | CreateCategory
  | CreateCategoryFail
  | CreateCategorySuccess
  | UpdateCategory
  | UpdateCategoryFail
  | UpdateCategorySuccess
  | DeleteCategory
  | DeleteCategoryFail
  | DeleteCategorySuccess;
