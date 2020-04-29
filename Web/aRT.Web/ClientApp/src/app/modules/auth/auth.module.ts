// Decorators
import {NgModule} from '@angular/core';

// NGRX & Store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

// Modules
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {MaterialModule} from '../material/material.module';

// Guards

// Services

// Components
import { AuthComponent } from './containers/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MaterialModule,
    // StoreModule.forFeature('auth', reducers),
    // EffectsModule.forFeature(effects),
  ],
  providers: [
    // ProductService,
    // fromGuards.guards,
  ]
})
export class HomeModule {
}