import { AnyAction } from 'redux';
import { ActionType } from '../../types/action';
import { User } from '../../types/user';

type UserState = {
  user: User | null,
  token: string | null
}

const initialState: UserState = {
  user: null,
  token: null
}

export default function userReducer(state=initialState, action: AnyAction): UserState {
  switch (action.type) {
    case ActionType.USER_SET:
      return {
        token: action.token,
        user: action.user
      }
    case ActionType.USER_UNSET:
      return {
        user: null,
        token: null
      }
    default:
      return state
  }
}
