import { AnyAction } from 'redux';
import { ActionType } from '../../types/action';
import { Place } from '../../types/places';

export interface PlacesStateType {
  list: Place[],
  loading: boolean,
  error?: string,
}

const defaultState: PlacesStateType = {
  list: [],
  loading: false,
  error: undefined
};

export function placesReducer(
  state=defaultState,
  action: AnyAction): PlacesStateType {
  switch (action.type) {
    case ActionType.PLACES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ActionType.PLACES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        list: action.payload
      }
    case ActionType.PLACES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
