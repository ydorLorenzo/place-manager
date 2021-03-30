import { ActionType, LoginData, loginRequestType, logoutRequestType } from '../../types/action';

export function loginAction ({ email, password }: LoginData): loginRequestType {
  return {
    type: ActionType.LOGIN_REQUEST,
    email,
    password
  };
}

export function logoutAction (): logoutRequestType {
  return {
    type: ActionType.LOGOUT
  }
}
