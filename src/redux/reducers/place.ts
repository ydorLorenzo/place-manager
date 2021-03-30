import { AnyAction } from 'redux';
import { ActionType } from '../../types/action';
import { Place } from '../../types/places';

export interface PlaceStateType {
  place?: Place,
  deleting: boolean,
  adding: boolean,
  added: boolean,
  error?: string,
}

const defaultState: PlaceStateType = {
  deleting: false,
  adding: false,
  added: false
};

export function placeReducer(
  state=defaultState,
  action: AnyAction): PlaceStateType {
  switch (action.type) {
    case ActionType.REMOVING_PLACE:
      return {
        ...state,
        deleting: true,
        adding: false,
        added: false
      }
    case ActionType.REMOVED_PLACE:
      return {
        ...state,
        deleting: false,
        adding: false,
        added: false
      }
    case ActionType.REMOVE_PLACE_ERROR:
      return {
        ...state,
        deleting: false,
        adding: false,
        added: false,
        error: action.payload
      }
    case ActionType.PLACE_REQUEST:
      return {
        ...state,
        deleting: false,
        adding: true,
        added: false
      }
    case ActionType.PLACE_SUCCESS:
      return {
        ...state,
        deleting: false,
        adding: false,
        added: true,
        place: action.payload
      }
    case ActionType.PLACE_FAILURE:
      return {
        ...state,
        deleting: false,
        adding: false,
        error: action.payload,
        added: false
      }
    default:
      return state
  }
}
