// Decorators
import {NgModule} from '@angular/core';

// Modules
import {RouterModule, Routes} from '@angular/router';

// Guards
import * as fromGuards from './guards';

// Components
import {HomeComponent} from './containers/home/home.component';
import {CreateProductComponent} from './containers/create-product/create-product.component';
import {EditProductComponent} from './containers/edit-product/edit-product.component';
import {DetailsProductComponent} from './containers/details-product/details-product.component';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [fromGuards.ProductsGuard],
  },
  {
    path: 'create',
    component: CreateProductComponent,
    canActivate: [fromGuards.ProductsGuard],
  },
  {
    path: 'edit/:productId',
    component: EditProductComponent,
    canActivate: [fromGuards.ProductExistsGuard],
  },
  {
    path: 'details/:productId',
    component: DetailsProductComponent,
    canActivate: [fromGuards.ProductExistsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
