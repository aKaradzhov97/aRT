// Decorators & Lifehooks
import { Component } from '@angular/core';

// NGRX
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent {

  constructor(private store: Store<fromStore.UserState>) {
  }

  onSubmit(value): void {
    this.store.dispatch(new fromStore.RegisterUser(value));
  }

}
