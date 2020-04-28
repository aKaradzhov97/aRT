// Decorators
import {NgModule} from '@angular/core';

// Material Modules
import {
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
} from '@angular/material';

// Constants
const MaterialComponents = [
  MatListModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {
}
