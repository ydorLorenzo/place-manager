import { Place } from './places';
import { User } from './user';

export enum ActionType {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',

  PLACES_REQUEST = 'PLACES_REQUEST',
  PLACES_SUCCESS = 'PLACES_SUCCESS',
  PLACES_FAILURE = 'PLACES_FAILURE',

  PLACE_REQUEST = 'PLACE_REQUEST',
  PLACE_SUCCESS = 'PLACE_SUCCESS',
  PLACE_FAILURE = 'PLACE_FAILURE',

  USER_SET = 'USER_SET',
  USER_UNSET = 'USER_UNSET',
}

export type LoginData = {
  email: string;
  password: string;
}

export type userSetType = {
  type: 'USER_SET',
  token: string,
  user: User
}

export type userUnsetType = {
  type: 'USER_UNSET'
}

export type loginRequestType = {
  type: 'LOGIN_REQUEST',
  email: string,
  password: string
}
export type loginSuccessType = {
  type: 'LOGIN_SUCCESS',
  payload: User
}
export type loginFailureType = {
  type: 'LOGIN_FAILURE',
  payload: string | undefined
}

export type placesRequestType = {
  type: 'PLACES_REQUEST'
}
export type placesSuccessType = {
  type: 'PLACES_SUCCESS',
  payload: Place[]
}
export type placesFailureType = {
  type: 'PLACES_FAILURE',
  payload: string | undefined
}
export type placeRequestType = {
  type: 'PLACE_REQUEST',
  payload: number
}
export type placeSuccessType = {
  type: 'PLACE_SUCCESS',
  payload: Place
}

export type placeAddRequestType = {
  type: "PLACE_ADD_REQUEST",
  payload: Place
}
export type placeAddSuccessType = {
  type: "PLACE_ADD_SUCCESS",
  payload: Place
}
export type placeAddFailureType = {
  type: "PLACE_ADD_FAILURE",
  payload: string | undefined
}
