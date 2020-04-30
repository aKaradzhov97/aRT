// Decorators
import {NgModule} from '@angular/core';

// NGRX & Store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers, effects} from './store';

// Modules
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {MaterialModule} from '../material/material.module';

// Guards

// Services
import { UserService } from '../../core/services/user.service';

// Components
import { AuthLoginComponent } from './containers/auth-login/auth-login.component';
import { AuthRegisterComponent } from './containers/auth-register/auth-register.component';
import { AuthForgotPasswordComponent } from './containers/auth-forgot-password/auth-forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MaterialModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    UserService,
    // fromGuards.guards,
  ]
})
export class AuthModule {
}
