import {Action} from '@ngrx/store';

import {Product} from '../../../../shared/models/product.model';

// Load products
export const LOAD_PRODUCTS = '[Products] Load Products';
export const LOAD_PRODUCTS_FAIL = '[Products] Load Products Fail';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;

  constructor(public payload: any) {
  }
}


// CREATE

export const CREATE_PRODUCT = '[Products] Create Product';
export const CREATE_PRODUCT_FAIL = '[Products] Create Product Fail';
export const CREATE_PRODUCT_SUCCESS = '[Products] Create Product Success';

export class CreateProduct implements Action {
  readonly type = CREATE_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class CreateProductFail implements Action {
  readonly type = CREATE_PRODUCT_FAIL;

  constructor(public payload: any) {
  }
}

export class CreateProductSuccess implements Action {
  readonly type = CREATE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

// UPDATE

export const UPDATE_PRODUCT = '[Products] Update Product';
export const UPDATE_PRODUCT_FAIL = '[Products] Update Product Fail';
export const UPDATE_PRODUCT_SUCCESS = '[Products] Update Product Success';

export class UpdateProduct implements Action {
  readonly type = UPDATE_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class UpdateProductFail implements Action {
  readonly type = UPDATE_PRODUCT_FAIL;

  constructor(public payload: any) {
  }
}

export class UpdateProductSuccess implements Action {
  readonly type = UPDATE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

// DELETE

export const DELETE_PRODUCT = '[Products] Delete Product';
export const DELETE_PRODUCT_FAIL = '[Products] Delete Product Fail';
export const DELETE_PRODUCT_SUCCESS = '[Products] Delete Product Success';

export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;

  constructor(public payload: Product) {
  }
}

export class DeleteProductFail implements Action {
  readonly type = DELETE_PRODUCT_FAIL;

  constructor(public payload: any) {
  }
}

export class DeleteProductSuccess implements Action {
  readonly type = DELETE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }
}

// Action types
export type ProductsAction =
  | LoadProducts
  | LoadProductsFail
  | LoadProductsSuccess
  | CreateProduct
  | CreateProductFail
  | CreateProductSuccess
  | UpdateProduct
  | UpdateProductFail
  | UpdateProductSuccess
  | DeleteProduct
  | DeleteProductFail
  | DeleteProductSuccess;
