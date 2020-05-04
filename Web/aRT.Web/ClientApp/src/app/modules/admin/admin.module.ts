// Decorators
import {NgModule} from '@angular/core';

// NGRX & Store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
// import {reducers, effects} from './store';

// Modules
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {MaterialModule} from '../material/material.module';
import {SharedModule} from '../../shared/shared.module';

// Guards

// Services
import {UserService} from '../../core/services/user.service';
import {PanelNavComponent} from './components/panel-nav/panel-nav.component';
import {PanelComponent} from './containers/panel/panel.component';

// Components

@NgModule({
  declarations: [
    PanelNavComponent,
    PanelComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule
    // StoreModule.forFeature('auth', reducers),
    // EffectsModule.forFeature(effects),
  ],
  providers: [
    UserService,
    // fromGuards.guards,
  ]
})
export class AdminModule {
}
