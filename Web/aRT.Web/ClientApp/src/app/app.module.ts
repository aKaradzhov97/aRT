// Decorators
import {NgModule} from '@angular/core';

// Modules
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {MaterialModule} from './modules/material/material.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import {EffectsModule} from '@ngrx/effects';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

// Store
import {reducers, effects, CustomSerializer} from './store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

// Interceptors
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { SuccessInterceptor } from './core/interceptors/success.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

// Components
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const metaReducers: MetaReducer<any>[] = [];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    SharedModule,
    MaterialModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SuccessInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
