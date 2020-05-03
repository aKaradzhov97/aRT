// Decorators
import {NgModule} from '@angular/core';

// Modules
import {RouterModule, Routes} from '@angular/router';

// Guards
import * as fromGuards from '../../../home/guards';

// Components
import {CreateProductComponent} from './containers/create-product/create-product.component';
import {EditProductComponent} from './containers/edit-product/edit-product.component';


const ROUTES: Routes = [
  {
    path: 'create',
    component: CreateProductComponent,
  },
  {
    path: 'edit/:productId',
    component: EditProductComponent,
    canActivate: [fromGuards.ProductExistsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
