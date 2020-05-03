// Decorators
import {NgModule} from '@angular/core';

// Modules
import {RouterModule, Routes} from '@angular/router';

// Guards

// Components
import {AdminPanelComponent} from './containers/admin-panel/admin-panel.component';


const ROUTES: Routes = [
  {
    path: 'panel',
    component: AdminPanelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
