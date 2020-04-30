// Decorators & Lifehooks
import { Component } from '@angular/core';

// NGRX
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent {

  constructor(private store: Store<fromStore.UserState>) {
  }

  onSubmit(value): void {
    this.store.dispatch(new fromStore.LoginUser(value));
  }

}
