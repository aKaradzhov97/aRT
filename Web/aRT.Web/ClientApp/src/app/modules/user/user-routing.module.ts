// Decorators
import {NgModule} from '@angular/core';

// Modules
import {RouterModule, Routes} from '@angular/router';

// Guards

// Components
import {UserAccountComponent} from './containers/user-account/user-account.component';


const ROUTES: Routes = [
  {
    path: 'account',
    component: UserAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
