// Decorators
import {NgModule} from '@angular/core';

// Modules
import {RouterModule, Routes} from '@angular/router';

// Guards

// Components
import {AuthLoginComponent} from './containers/auth-login/auth-login.component';
import {AuthRegisterComponent} from './containers/auth-register/auth-register.component';
import {AuthForgotPasswordComponent} from './containers/auth-forgot-password/auth-forgot-password.component';

const ROUTES: Routes = [
  {
    path: 'login',
    component: AuthLoginComponent,
  },
  {
    path: 'register',
    component: AuthRegisterComponent,
  },
  {
    path: 'forgot-password',
    component: AuthForgotPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
