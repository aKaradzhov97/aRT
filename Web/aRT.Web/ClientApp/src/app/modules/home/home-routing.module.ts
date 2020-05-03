// Decorators
import {NgModule} from '@angular/core';

// Modules
import {RouterModule, Routes} from '@angular/router';

// Guards
import * as fromGuards from './guards';

// Components
import {HomeComponent} from './containers/home/home.component';
import {DetailsProductComponent} from './containers/details-product/details-product.component';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [fromGuards.ProductsGuard],
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
