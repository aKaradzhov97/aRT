// Decorators
import {NgModule} from '@angular/core';

// Modules
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../modules/material/material.module';

// Pipes

// Components
// - Layout
import {HeaderComponent} from './components/layout/header/header.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {SidenavComponent} from './components/layout/sidenav/sidenav.component';

// - Products

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ]
})

export class SharedModule {
}
