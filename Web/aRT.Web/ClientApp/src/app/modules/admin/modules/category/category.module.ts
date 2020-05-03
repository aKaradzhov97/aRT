// Decorators
import {NgModule} from '@angular/core';

// NGRX & Store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers, effects} from './store';

// Modules
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryRoutingModule} from './category-routing.module';
import {MaterialModule} from '../../../material/material.module';

// Guards

// Services
import {CategoryService} from '../../../../core/services/category.service';

// Components
import {CreateCategoryComponent} from './containers/create-category/create-category.component';
import {UpdateCategoryComponent} from './containers/update-category/update-category.component';
import {CategoriesComponent} from './containers/categories/categories.component';
import {CreateCategoryFormComponent} from './components/create-category-form/create-category-form.component';
import {UpdateCategoryFormComponent} from './components/update-category-form/update-category-form.component';
import {CategoriesListComponent} from './components/categories-list/categories-list.component';


@NgModule({
  declarations: [
    CreateCategoryComponent,
    UpdateCategoryComponent,
    CreateCategoryFormComponent,
    UpdateCategoryFormComponent,
    CategoriesComponent,
    CategoriesListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoryRoutingModule,
    MaterialModule,
    StoreModule.forFeature('categories', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    CategoryService,
    // fromGuards.guards,
  ]
})
export class CategoryModule {
}
