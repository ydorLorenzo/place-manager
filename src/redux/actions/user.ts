import { ActionType, userSetType, userUnsetType } from '../../types/action';
import { User } from '../../types/user';

export function userSet (user: User, token: string): userSetType {
  return {
    type: ActionType.USER_SET,
    user,
    token
  }
}

export function userUnset (): userUnsetType {
  return {
    type: ActionType.USER_UNSET
  }
}
