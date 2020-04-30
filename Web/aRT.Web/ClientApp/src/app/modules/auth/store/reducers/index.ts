import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import * as fromUsers from './users.reducer';

export interface UserState {
  user: fromUsers.UserState;
}

export const reducers: ActionReducerMap<UserState> = {
  user: fromUsers.reducer,
};

export const getUsersState = createFeatureSelector<UserState>(
  'user'
);
