import * as fromUsers from '../actions/users.action';
import {User} from '../../../../shared/models/user.model';

export interface UserState {
  entities: { [id: string]: User };
  loaded: boolean;
  loading: boolean;
}

export const initialState: UserState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(state = initialState,
                        action: fromUsers.UsersAction): UserState {
  switch (action.type) {
    case fromUsers.REGISTER_USER:
    case fromUsers.LOGIN_USER: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromUsers.REGISTER_USER_SUCCESS:
    case fromUsers.LOGIN_USER_SUCCESS: {
      const user: User = action.payload;
      const entities = {
        ...state.entities,
        [user.id]: user
      };

      return {
        ...state,
        entities
      };
    }
    case fromUsers.REGISTER_USER_FAIL:
    case fromUsers.LOGIN_USER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getUsersEntities = (state: UserState) => state.entities;
export const getUsersLoading = (state: UserState) => state.loading;
export const getUsersLoaded = (state: UserState) => state.loaded;
