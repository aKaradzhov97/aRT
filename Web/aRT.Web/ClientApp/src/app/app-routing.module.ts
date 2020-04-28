// Decorators
import {NgModule} from '@angular/core';

// Modules
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

const ROUTES: Routes = [
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
      {preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled'}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
