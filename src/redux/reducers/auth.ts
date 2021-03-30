import { AnyAction } from 'redux';
import { ActionType } from '../../types/action';

export type AuthStateType = {
  authenticated: boolean;
  authenticating: boolean;
  error?: string;
}

const defaultState: AuthStateType = {
  authenticated: false,
  authenticating: false
};

export function authReducer (state = defaultState, action: AnyAction): AuthStateType {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      return {
        ...state,
        ...{
          authenticating: true,
          authenticated: false,
          error: undefined
        }
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        ...{
          authenticating: false,
          authenticated: true,
          error: undefined
        }
      };
    case ActionType.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        ...{
          authenticating: false,
          authenticated: false,
          error: action?.error
        }
      };
    case ActionType.LOGIN_FAILURE:
      return {
        ...state,
        ...{
          authenticating: false,
          authenticated: false,
          error: action?.error
        }

      };
    default:
      return state;
  }
}
