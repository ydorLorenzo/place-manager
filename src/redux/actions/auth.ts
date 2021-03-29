import { ActionType, LoginData, loginRequestType } from '../../types/action';

export function loginAction ({ email, password }: LoginData): loginRequestType {
  console.log('getting here!');
  return {
    type: ActionType.LOGIN_REQUEST,
    email,
    password
  };
}
