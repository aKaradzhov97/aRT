// Decorators
import {NgModule} from '@angular/core';

// Modules
import {RouterModule, Routes} from '@angular/router';

// Guards

// Components


const ROUTES: Routes = [
  {
    path: 'category',
    loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
