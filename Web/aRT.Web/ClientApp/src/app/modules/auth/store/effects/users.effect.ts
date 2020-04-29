import {Injectable} from '@angular/core';
import {User} from '../../../../shared/models/user.model';

import {Effect, Actions, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {map, switchMap, catchError} from 'rxjs/operators';

import * as fromRoot from '../../../../store';
import * as userActions from '../actions/users.action';
import * as fromServices from '../../../../core/services/user.service';


@Injectable()
export class UsersEffect {
  constructor(private actions$: Actions,
              private userService: fromServices.UserService) {
  }

  @Effect()
  loginUser$ = this.actions$.pipe(
    ofType(userActions.LOGIN_USER),
    map((action: userActions.LoginUser) => action.payload),
    switchMap((user: User) => {
      return this.userService
        .login(user)
        .pipe(
          // Using the other line to avoid creating 2 entities (one of them broken) because of the
          // server response type!
          // map((user: User) => new userActions.LoginUserSuccess(user)),
          map((response: any) => new userActions.LoginUserSuccess(response.data)),
          catchError((error: any) => of(new userActions.LoginUserFail(error)))
        );
    })
  );

  @Effect()
  loginUserSuccess = this.actions$
    .pipe(
      ofType(userActions.LOGIN_USER_SUCCESS),
      map((action: userActions.LoginUserSuccess) => action.payload),
      map((user: User) => new fromRoot.Go({
        path: ['/']
      }))
    );


  @Effect()
  registerUser$ = this.actions$.pipe(
    ofType(userActions.REGISTER_USER),
    map((action: userActions.RegisterUser) => action.payload),
    switchMap((user: User) => {
      return this.userService
        .register(user)
        .pipe(
          // Using the other line to avoid creating 2 entities (one of them broken) because of the
          // server response type!
          // map((user: User) => new userActions.RegisterUserSuccess(user)),
          map((response: any) => new userActions.RegisterUserSuccess(response.data)),
          catchError((error: any) => of(new userActions.RegisterUserFail(error)))
        );
    })
  );

  @Effect()
  registerUserSuccess$ = this.actions$
    .pipe(
      ofType(userActions.REGISTER_USER_SUCCESS),
      map((action: userActions.RegisterUserSuccess) => action.payload),
      map((user: User) => new fromRoot.Go({
        path: ['/']
      }))
    );
}
