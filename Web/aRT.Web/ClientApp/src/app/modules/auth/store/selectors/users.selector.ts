// NGRX
import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../../store';
import * as fromFeature from '../reducers';
import * as fromUsers from '../reducers/users.reducer';

// Model
import {User} from '../../../../shared/models/user.model';

// Selectors
export const getUserState = createSelector(
  fromFeature.getUsersState,
  (state: fromFeature.UserState) => state.user
);

export const getUserEntity = createSelector(
  getUserState,
  fromUsers.getUserEntity
);

export const getSelectedUser = createSelector(
  getUserEntity,
  fromRoot.getRouterState,
  (user, router): User => {
    return router.state && user[router.state.params.userId];
  }
);

export const getUserLoaded = createSelector(
  getUserState,
  fromUsers.getUserLoaded
);
export const getUserLoading = createSelector(
  getUserState,
  fromUsers.getUserLoading
);
