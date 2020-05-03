// Decorators
import {NgModule} from '@angular/core';

// Modules
import {RouterModule, Routes} from '@angular/router';

// Guards

// Components
import {CreateCategoryComponent} from './containers/create-category/create-category.component';


const ROUTES: Routes = [
  {
    path: 'create',
    component: CreateCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
