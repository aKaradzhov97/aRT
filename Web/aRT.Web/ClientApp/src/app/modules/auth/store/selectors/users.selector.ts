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
  (state: fromFeature.UsersState) => state.users
);

export const getUsersEntities = createSelector(
  getUserState,
  fromUsers.getUsersEntities
);

export const getLoggedInUser = createSelector(
  getUsersEntities,
  fromRoot.getRouterState,
  (entities, router): User => {
    return router.state && entities[router.state.params.userId];
  }
);

export const getUserLoaded = createSelector(
  getUserState,
  fromUsers.getUsersLoaded
);
export const getUserLoading = createSelector(
  getUserState,
  fromUsers.getUsersLoading
);
