// Decorators
import {NgModule} from '@angular/core';

// NGRX & Store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers, effects} from './store';

// Modules
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductRoutingModule} from './product-routing.module';
import {MaterialModule} from '../../../material/material.module';

// Guards
import * as fromGuards from './guards';

// Services
import {ProductService} from '../../../../core/services/product.service';

// Components
import {CreateProductComponent} from './containers/create-product/create-product.component';
import {CreateProductFormComponent} from './components/create-product-form/create-product-form.component';
import {EditProductComponent} from './containers/edit-product/edit-product.component';
import {EditProductFormComponent} from './components/edit-product-form/edit-product-form.component';

@NgModule({
  declarations: [
    CreateProductComponent,
    CreateProductFormComponent,
    EditProductComponent,
    EditProductFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    MaterialModule,
    StoreModule.forFeature('adminProducts', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    ProductService,
    fromGuards.guards,
  ]
})
export class ProductModule {
}
