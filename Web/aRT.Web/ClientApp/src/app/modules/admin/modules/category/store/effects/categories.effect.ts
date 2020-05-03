import {Injectable} from '@angular/core';
import {Category} from '../../../../../../shared/models/category.model';

import {Effect, Actions, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {map, switchMap, catchError} from 'rxjs/operators';

import * as fromRoot from '../../../../../../store';
import * as categoryActions from '../actions/categories.action';
import * as fromServices from '../../../../../../core/services/category.service';


@Injectable()
export class CategoriesEffect {
  @Effect()
  loadCategories$ = this.actions$.pipe(
    ofType(categoryActions.LOAD_CATEGORIES),
    switchMap(() => {
      return this.categoryService
        .getCategories()
        .pipe(
          map(products => new categoryActions.LoadCategoriesSuccess(products)),
          catchError(error => of(new categoryActions.LoadCategoriesFail(error)))
        );
    })
  );
  @Effect()
  createCategory$ = this.actions$.pipe(
    ofType(categoryActions.CREATE_CATEGORY),
    map((action: categoryActions.CreateCategory) => action.payload),
    switchMap((category: Category) => {
      return this.categoryService
        .createCategory(category)
        .pipe(
          map((response: any) => new categoryActions.CreateCategorySuccess(response.data)),
          catchError((error: any) => of(new categoryActions.CreateCategoryFail(error)))
        );
    })
  );
  @Effect()
  createCategorySuccess$ = this.actions$
    .pipe(
      ofType(categoryActions.CREATE_CATEGORY_SUCCESS),
      map((action: categoryActions.CreateCategorySuccess) => action.payload),
      map((category: Category) => new fromRoot.Go({
        path: ['/admin/category', category.id]
      }))
    );
  @Effect()
  updateCategory$ = this.actions$.pipe(
    ofType(categoryActions.UPDATE_CATEGORY),
    map((action: categoryActions.UpdateCategory) => action.payload),
    switchMap((category: Category) => {
      return this.categoryService
        .updateCategory(category)
        .pipe(
          map((response: any) => new categoryActions.UpdateCategorySuccess(response.data)),
          catchError((error: any) => of(new categoryActions.UpdateCategorySuccess(error)))
        );
    })
  );
  @Effect()
  deleteCategory$ = this.actions$.pipe(
    ofType(categoryActions.DELETE_CATEGORY),
    map((action: categoryActions.DeleteCategory) => action.payload),
    switchMap((category: Category) => {
      return this.categoryService
        .deleteCategory(category)
        .pipe(
          map(() => new categoryActions.DeleteCategorySuccess(category)),
          catchError((error: any) => of(new categoryActions.DeleteCategoryFail(error)))
        );
    })
  );
  @Effect()
  handleCategorySuccess$ = this.actions$
    .pipe(
      ofType(categoryActions.UPDATE_CATEGORY_SUCCESS, categoryActions.DELETE_CATEGORY_SUCCESS),
      map((category: Category) => {
        return new fromRoot.Go({
          path: ['/admin/category/all'],
        });
      }),
    );

  constructor(private actions$: Actions,
              private categoryService: fromServices.CategoryService) {
  }
}
