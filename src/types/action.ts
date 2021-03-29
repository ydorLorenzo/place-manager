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

  REMOVING_PLACE = 'REMOVING_PLACE',
  REMOVED_PLACE = 'REMOVED_PLACE',
  REMOVE_PLACE_ERROR = 'REMOVE_PLACE_ERROR',

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
  payload: Place
}
export type placeSuccessType = {
  type: 'PLACE_SUCCESS',
  payload: Place
}

export type placeFailureType = {
  type: 'PLACE_FAILURE',
  payload: string | undefined
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

export type removingPlaceType = {
  type: "REMOVING_PLACE",
  payload: number
}

export type removePlaceErrorType = {
  type: ActionType.REMOVE_PLACE_ERROR,
  payload: string | undefined
}
