import * as fromUsers from '../actions/users.action';
import {User} from '../../../../shared/models/user.model';

export interface UserState {
  user: User;
  loaded: boolean;
  loading: boolean;
}

export const initialState: UserState = {
  user: null,
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
      const data = {
        ...state.user,
        user
      };

      return {
        ...state,
        ...data
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

export const getUserEntity = (state: UserState) => state.user;
export const getUserLoading = (state: UserState) => state.loading;
export const getUserLoaded = (state: UserState) => state.loaded;
