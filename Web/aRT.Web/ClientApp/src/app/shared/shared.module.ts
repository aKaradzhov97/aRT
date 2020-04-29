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
import { InputComponent } from './components/forms/input/input.component';
import { CheckboxComponent } from './components/forms/checkbox/checkbox.component';
import { ButtonComponent } from './components/forms/button/button.component';
import { TextareaComponent } from './components/forms/textarea/textarea.component';
import { SelectComponent } from './components/forms/select/select.component';

// - Products

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    TextareaComponent,
    SelectComponent,
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
