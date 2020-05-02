// Decorators
import {NgModule} from '@angular/core';

// Modules
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES,
      {initialNavigation: 'enabled', preloadingStrategy: PreloadAllModules}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
