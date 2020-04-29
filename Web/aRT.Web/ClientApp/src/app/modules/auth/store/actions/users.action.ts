import {Action} from '@ngrx/store';

import {User} from '../../../../shared/models/user.model';

// LOGIN

export const LOGIN_USER = '[User] Login User';
export const LOGIN_USER_FAIL = '[User] Login User Fail';
export const LOGIN_USER_SUCCESS = '[User] Login User Success';

export class LoginUser implements Action {
  readonly type = LOGIN_USER;

  constructor(public payload: User) {
  }
}

export class LoginUserFail implements Action {
  readonly type = LOGIN_USER_FAIL;

  constructor(public payload: any) {
  }
}

export class LoginUserSuccess implements Action {
  readonly type = LOGIN_USER_SUCCESS;

  constructor(public payload: User) {
  }
}


// REGISTER

export const REGISTER_USER = '[User] Register User';
export const REGISTER_USER_FAIL = '[User] Register User Fail';
export const REGISTER_USER_SUCCESS = '[User] Register User Success';

export class RegisterUser implements Action {
  readonly type = REGISTER_USER;

  constructor(public payload: User) {
  }
}

export class RegisterUserFail implements Action {
  readonly type = REGISTER_USER_FAIL;

  constructor(public payload: any) {
  }
}

export class RegisterUserSuccess implements Action {
  readonly type = REGISTER_USER_SUCCESS;

  constructor(public payload: User) {
  }
}

// Action types
export type UsersAction =
  | LoginUser
  | LoginUserFail
  | LoginUserSuccess
  | RegisterUser
  | RegisterUserFail
  | RegisterUserSuccess;
