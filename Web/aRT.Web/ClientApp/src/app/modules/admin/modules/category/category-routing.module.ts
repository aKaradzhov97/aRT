// Decorators
import {NgModule} from '@angular/core';

// Modules
import {RouterModule, Routes} from '@angular/router';

// Guards

// Components
import {CreateCategoryComponent} from './containers/create-category/create-category.component';
import {UpdateCategoryComponent} from './containers/update-category/update-category.component';
import {CategoriesComponent} from './containers/categories/categories.component';


const ROUTES: Routes = [
  {
    path: 'create',
    component: CreateCategoryComponent,
  },
  {
    path: 'update',
    component: UpdateCategoryComponent,
  },
  {
    path: 'all',
    component: CategoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
